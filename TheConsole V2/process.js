// This file is the Engine of TheConsole, created by Dragan Ilievski
YUI().use("node", function(Y) {

            var MODULES = [
				{
                    name: "about",
                    handler: about
                },
				{
                    name: "help",
                    handler: help
                },
				{
                    name: "youtube",
                    handler: youtube
                },
			
				{
                    name: "tellmeajoke",
                    handler: tellmeajoke
                },
				{
                    name: "googlemaps",
                    handler: googlemaps
                },
				{
                    name: "proxy",
                    handler: proxy
                },
				{
                    name: "github",
                    handler: github
                },
				{
                    name: "facebook",
                    handler: facebook
                },
				{
                    name: "twitter",
                    handler: twitter
                },
				{
                    name: "google",
                    handler: google
                },
				{
                    name: "soundcloud",
                    handler: soundcloud
                },
				{
                    name: "explain",
                    handler: explain
                },
				{
                    name: "instagram",
                    handler: instagram
                },
				{
                    name: "linkedin",
                    handler: linkedin
                },
				{
                    name: "translate",
                    handler: translate
                },
				{
                    name: "reverseimageURL",
                    handler: reverseimageURL
                },
				
				{
                    name: "vubey",
                    handler: vubey
                },
				{
                    name: "duckduckgo",
                    handler: duckduckgo
                },
				{
                    name: "resultfor",
                    handler: resultfor
                },
                {
                    name: "username",
                    handler: function(args) {
                        out("Hello there, " + args[0] + " and welcome to TheConsole V2.");
						out("------------------------------------------------------------------------------------------------------------");
                    }
                }
            ];

            function processCommand() {
                var inField = Y.one("#in");
                var input = inField.get("value");
                var parts = input.replace(/\s+/g, " ").split(" ");
                var command = parts[0];
                var args = parts.length > 1 ? parts.slice(1, parts.length) : [];

                inField.set("value", "");

                for (var i = 0; i < MODULES.length; i++) {
                    if (command === MODULES[i].name) {
                        MODULES[i].handler(args);
                        return;
                    }
                }

                out("Unknown Command >" + command );
				out("Type in : help - to list all available commands.");
				out("------------------------------------------------------------------------------------------------------------");
            }

			function help(args) { 
                out("Welcome to TheConsole V2 which can be really handy tool if you know how to use it. TheConsole is developed by Dragan Ilievski in 2014. All rights reserved.");
				out("Syntax to use all commands : command (whitespace) parameter or value | (for example : facebook draganili, google potato, username chuckNorris)");
				out("------------------------------------------------------------------------------------------------------------");
				out("Useful commands : google + searchword, facebook + username, twitter + username, soundcloud + username, github + username, resultfor 52+85 etc.");
				out("Available commands: <h1>help</h1><h1>explain</h1><h1>tellmeajoke</h1><h1>duckduckgo</h1><h1>reverseimageURL</h1><h1>about</h1><h1>googlemaps</h1><h1>resultfor</h1><h1>path</h1><h1>proxy</h1><h1>vubey</h1><h1>youtube</h1><h1>facebook</h1><h1>twitter</h1><h1>google</h1><h1>linkedin</h1><h1>instagram</h1><h1>soundcloud</h1><h1>github</h1><h1>translate</h1>");
				out("------------------------------------------------------------------------------------------------------------");
            }
			
			function about(args) {
                 out("This is powerful HTML/CSS/JS-based console that offers fast and useful tools on the internet. It is developed by Dragan Ilievski in 2014.");
				 out("The developer is not responsible for any misuse of the tools provided in it. All rights are reserved by Dragan Ilievski under the GNU General Public License, version 2 (GPL-2.0)");
				 out("------------------------------------------------------------------------------------------------------------");
				 }
			function path(args) {
                window.location.href = args;
            }
			function proxy(args) {
                window.location.href ="http://www.vpnbook.com/webproxy";
            }
			function facebook(args) {
                window.location.href ="https://www.facebook.com/"+ args;
            }
			function linkedin(args) {
                window.location.href ="https://www.linkedin.com/";
            }
			function googlemaps(args) {
                window.location.href ="https://www.google.mk/maps/place/"+ args;
            }
			function tellmeajoke(args) {
                window.location.href ="http://www.dadjokegenerator.com/";
            }
			function twitter(args) {
                window.location.href ="https://twitter.com/"+ args;
            }	
			function duckduckgo(args) {
                window.location.href ="https://duckduckgo.com/?q="+ args;
            }	
			function youtube(args) {
                window.location.href ="https://www.youtube.com/results?search_query="+ args;
            }				
			function google(args) {
                window.location.href ="https://www.google.com/#q="+ args;
            }
			function translate(args) {
                window.location.href ="https://translate.google.com/";
            }
			function vubey(args) {
                window.location.href ="https://vubey.com/";
            }
			function github(args) {
                window.location.href ="https://github.com/"+ args;
            }
			function soundcloud(args) {
				window.location.href ="https://soundcloud.com/"+ args;
			}
			function explain(args) {
				window.location.href ="https://en.wikipedia.org/wiki/Special:Search?search="+ args;
			}
			function instagram(args) {
				window.location.href ="http://instagram.com/"+ args;
			}
			function reverseimageURL(args) {
				window.location.href ="https://www.tineye.com/parse?url="+ args;
			}
			https://www.tineye.com/parse?url=
			function resultfor(args) {
				window.location.href ="http://www.wolframalpha.com/input/?i="+ args;
			}
			
            function out(text) {
                var p = Y.Node.create("<p>" + text + "</p>");
                Y.one("#out").append(p);
                p.scrollIntoView();
            }

            Y.on("domready", function(e) {
                Y.one("body").setStyle("paddingBottom", Y.one("#in").get("offsetHeight"));
                Y.one("#in").on("keydown", function(e) {
                    if (e.charCode === 13) {
                        processCommand();
                    }
                });
            });
        });