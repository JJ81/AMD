define(["jquery"], function($) {
    try {
        $(function() {
            var color = {
                brown: "color:#560000;font-size:20px;",
                red: "color:#d83128;font-size:20px;",
                yellow: "color:#ea991b;font-size:20px;",
                green: "color:#93ba2f;font-size:20px;",
                blue: "color:#4da4e0;font-size:20px;"
            };
            
            var isChrome = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
            var isEdge = navigator.userAgent.toLowerCase().indexOf("edge") > -1; // new IE returns

            if (typeof console === "object" && console.log && typeof console.log === "function") {
                if (isChrome && !isEdge) {
                    console.log("%c   ____                                    ",
                        color.brown);
                    console.log("%c  / ___|___  _   _ %c_ __   %c__ _ %c_ __   %c__ _ ", color.brown, color.red, color.yellow, color.green, color.blue);
                    console.log("%c | |   / _ \\| | | %c| '_ \\ %c/ _` %c| '_ \\ %c/ _` |", color.brown, color.red, color.yellow, color.green, color.blue);
                    console.log("%c | |__| (_) | |_| %c| |_) %c| (_| %c| | | | %c(_| |", color.brown, color.red, color.yellow, color.green, color.blue);
                    console.log("%c  \\____\\___/ \\__,_%c| .__/ %c\\__,_%c|_| |_|%c\\__, |", color.brown, color.red, color.yellow,
                        color.green, color.blue);
                    console.log("%c                  %c|_|                %c|___/ ", color.brown, color.red, color.blue);
                    console.log("\n      %cLife is too short, you need cou%cp%ca%cn%cg.\n", color.brown, color.red, color.yellow, color.green, color.blue)
                } else {
                    console.log("   ____                                    ");
                    console.log("  / ___|___  _   _ _ __   __ _ _ __   __ _ ");
                    console.log(" | |   / _ \\| | | | '_ \\ / _` | '_ \\ / _` |");
                    console.log(" | |__| (_) | |_| | |_) | (_| | | | | (_| |");
                    console.log("  \\____\\___/ \\__,_| .__/ \\__,_|_| |_|\\__, |");
                    console.log("                  |_|                |___/ ");
                    console.log("\n      Life is too short, you need coupang.\n")
                }
                // console.log("\x3e \x3e \x3e https://coupang.saramin.co.kr/_service/zlight/apply_site/apply/intro.asp\n")
            }
        })
    } catch (e) {}
});