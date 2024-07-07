window.addEventListener("load", function () {
    $("a[href^=\\#ability-]:not([href=\\#ability-categories-and-relative-power])")
        .tooltip({
            html: true,
            title: function () {
                return $(this.href.substring(this.href.lastIndexOf("#"))).clone().wrap('<ul class="og-ability-details og-ability-tooltip"></ul>').parent()
            }
        })
})