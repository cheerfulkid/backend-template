! function (n) {
    "use strict";

    function e() {
        this.$body = n("body")
    }
    e.prototype.init = function () {
        n(".summernote-basic").summernote({
            placeholder: "Write something...",
            height: 230,
            callbacks: {
                onInit: function (e) {
                    n(e.editor).find(".custom-control-description").addClass("custom-control-label").parent().removeAttr("for")
                }
            }
        }), n("#summernote-airmode").summernote({
            airMode: !0,
            callbacks: {
                onInit: function (e) {
                    n(e.editor).find(".custom-control-description").addClass("custom-control-label").parent().removeAttr("for")
                }
            }
        });
        n("#summernote-edit").on("click", function () {
            n("#summernote-editmode").summernote({
                focus: !0,
                callbacks: {
                    onInit: function (e) {
                        n(e.editor).find(".custom-control-description").addClass("custom-control-label").parent().removeAttr("for")
                    }
                }
            }), n(this).hide(), n("#summernote-save").show()
        }), n("#summernote-save").on("click", function () {
            ! function () {
                n("#summernote-editmode").summernote("code");
                n("#summernote-editmode").summernote("destroy")
            }(), n(this).hide(), n("#summernote-edit").show()
        }), n("#summernote-hint").summernote({
            height: 230,
            toolbar: !1,
            placeholder: "type with apple, orange, watermelon and lemon",
            hint: {
                words: ["apple", "orange", "watermelon", "lemon"],
                match: /\b(\w{1,})$/,
                search: function (t, e) {
                    e(n.grep(this.words, function (e) {
                        return 0 === e.indexOf(t)
                    }))
                }
            }
        }), n.ajax({
            url: "https://api.github.com/emojis",
            async: !1
        }).then(function (e) {
            window.emojis = Object.keys(e), window.emojiUrls = e
        }), n("#summernote-emoji").summernote({
            height: 180,
            toolbar: !1,
            placeholder: "type starting with : and any alphabet",
            hint: {
                match: /:([\-+\w]+)$/,
                search: function (t, e) {
                    e(n.grep(emojis, function (e) {
                        return 0 === e.indexOf(t)
                    }))
                },
                template: function (e) {
                    return '<img src="' + emojiUrls[e] + '" width="20" /> :' + e + ":"
                },
                content: function (e) {
                    var t = emojiUrls[e];
                    return t ? n("<img />").attr("src", t).css("width", 20)[0] : ""
                }
            }
        }), n("#summernote-hint-mentions").summernote({
            height: 100,
            toolbar: !1,
            hint: {
                mentions: ["jayden", "sam", "alvin", "david"],
                match: /\B@(\w*)$/,
                search: function (t, e) {
                    e(n.grep(this.mentions, function (e) {
                        return 0 == e.indexOf(t)
                    }))
                },
                content: function (e) {
                    return "@" + e
                }
            }
        })
    }, n.Summernote = new e, n.Summernote.Constructor = e
}(window.jQuery),
function () {
    "use strict";
    window.jQuery.Summernote.init()
}();