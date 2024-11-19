(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [931], {
        193: function(e, t, i) {
            Promise.resolve().then(i.bind(i, 1640))
        },
        1640: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return P
                }
            });
            var n = i(7437),
                a = i(1647),
                l = i(571),
                r = i(1167),
                s = i(4446),
                o = i(2265),
                c = i(5541),
                d = i(489),
                x = i(3786),
                u = i(6133),
                m = i(7925),
                p = i(6258),
                f = i(5519),
                h = i(5227),
                b = i(8472),
                w = i(7744),
                j = i(1497),
                v = i(2649),
                y = i(7440);

                let xLoc, yLoc;
                let cityLoc;
                let countryLoc;
                let profilePhoto;

            function g(e) {
                let {
                    className: t,
                    children: i,
                    reverse: a,
                    duration: l = 20,
                    delay: r = 10,
                    radius: s = 50,
                    path: o = !0
                } = e;
                return (0, n.jsxs)(n.Fragment, {
                    children: [o && (0, n.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        version: "1.1",
                        className: "pointer-events-none absolute inset-0 h-full w-full",
                        children: (0, n.jsx)("circle", {
                            className: "stroke-black/10 stroke-1 dark:stroke-white/10",
                            cx: "50%",
                            cy: "50%",
                            r: s,
                            fill: "none",
                            strokeDasharray: "4 4"
                        })
                    }), (0, n.jsx)("div", {
                        style: {
                            "--duration": l,
                            "--radius": s,
                            "--delay": -r
                        },
                        className: (0, y.cn)("animate-orbit absolute flex h-full w-full transform-gpu items-center justify-center rounded-full border bg-black/10 [animation-delay:calc(var(--delay)*1000ms)] dark:bg-white/10", {
                            "[animation-direction:reverse]": a
                        }, t),
                        children: i
                    })]
                })
            }
            let N = () => (0, n.jsx)(h.Z, {
                    size: 42
                }),
                z = () => (0, n.jsx)(u.Z, {
                    size: 42
                }),
                _ = () => (0, n.jsx)(m.Z, {
                    size: 42
                }),
                k = () => (0, n.jsx)(f.Z, {
                    size: 42
                });
            var C = i(3872);

            function E() {
                return (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsx)("footer", {
                        className: "w-full self-end mt-4 border-t bg-zinc-50 px-6 pb-[32px] lg:pb-[32px] [@media(width:360px)]:hidden",
                        children: (0, n.jsxs)("div", {
                            className: "mx-auto flex h-full w-full max-w-[1200px] flex-col justify-between",
                            children: [(0, n.jsx)("div", {
                                className: "mb-10 flex w-full flex-col items-center justify-between overflow-hidden lg:flex-row"
                            }), (0, n.jsx)("div", {
                                className: "flex w-full items-center justify-center"
                            }), (0, n.jsx)("div", {
                                className: "flex w-full items-center justify-between",
                                children: (0, n.jsxs)("div", {
                                    className: "flex w-full items-center justify-center gap-10",
                                    children: [(0, n.jsx)("div", {
                                        className: "flex items-center gap-8",
                                        children: (0, n.jsx)("span", {
                                            className: "text-sm text-zinc-500 truncate",
                                            children: "\xa9 2024 Detetive AI"
                                        })
                                    }), (0, n.jsxs)("div", {
                                        className: "flex items-center gap-3",
                                        children: [(0, n.jsx)(C.kUi, {
                                            className: "text-zinc-400"
                                        }), (0, n.jsx)("span", {
                                            className: "text-sm truncate text-zinc-500",
                                            children: "Secure with SSL"
                                        })]
                                    })]
                                })
                            })]
                        })
                    })
                })
            }
            let F = {
                    width: "100%",
                    height: "400px"
                },
                Z = e => {
                    let {
                        step: t,
                        setEmotion: i,
                        emotion: a,
                        handleDynamicForward: l
                    } = e;
                    return (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsxs)(r.E.div, {
                            initial: {
                                opacity: 0,
                                filter: "blur(10px)"
                            },
                            animate: {
                                opacity: 1,
                                filter: "blur(0px)"
                            },
                            exit: {
                                opacity: 0,
                                filter: "blur(10px)"
                            },
                            className: "flex overflow-y-auto h-full w-full flex-col items-center overflow-hidden pt-16 [@media(min-width:360px)]:pt-10 [@media(min-width:320px)]:pt-10 justify-between",
                            children: [(0, n.jsxs)("div", {
                                className: "flex flex-col items-center ",
                                children: [(0, n.jsx)("h2", {
                                    className: "text-center text-4xl [@media(min-width:320px)]:text-3xl max-w-[332px] text-balance font-semibold mb-3 text-black",
                                    children: "Est\xe1 pronto para descobrir?"
                                }), (0, n.jsx)("p", {
                                    className: "text-center text-sm text-balance font-normal max-w-[300px] text-zinc-500",
                                    children: "Descubra tudo sobre o n\xfamero de telefone que voc\xea est\xe1 investigando."
                                })]
                            }), (0, n.jsxs)("div", {
                                className: "relative scale-90 -z-30 flex h-[500px] w-full flex-col items-center justify-center",
                                children: [(0, n.jsx)(g, {
                                    className: "h-[48px] w-[48px] border-none bg-transparent",
                                    radius: 100,
                                    duration: 20,
                                    delay: 10,
                                    reverse: !0,
                                    children: (0, n.jsx)(k, {})
                                }), (0, n.jsx)(g, {
                                    className: "h-[50px] w-[50px] border-none bg-transparent",
                                    radius: 150,
                                    duration: 20,
                                    delay: 40,
                                    reverse: !0,
                                    children: (0, n.jsx)(z, {})
                                }), (0, n.jsx)(g, {
                                    className: "h-[50px] w-[50px] border-none bg-transparent",
                                    radius: 190,
                                    duration: 20,
                                    delay: 60,
                                    children: (0, n.jsx)(_, {})
                                }), (0, n.jsx)(g, {
                                    className: "h-[50px] w-[50px] border-none bg-transparent",
                                    radius: 190,
                                    duration: 10,
                                    delay: 20,
                                    reverse: !0,
                                    children: (0, n.jsx)(N, {})
                                }), (0, n.jsx)(g, {
                                    className: "h-[50px] w-[50px] border-none bg-transparent",
                                    radius: 232,
                                    duration: 20,
                                    delay: 40,
                                    reverse: !0
                                })]
                            }), (0, n.jsx)("div", {
                                className: "w-full px-4 [@media(width:360px)]:mt-32 flex justify-center items-center",
                                children: (0, n.jsx)("button", {
                                    onClick: l,
                                    className: "group inline-flex  max-w-[372px] h-16 w-full items-center justify-center overflow-hidden rounded-[12px] border border-neutral-200 bg-transparent bg-zinc-800 px-6 font-medium text-white transition-all [box-shadow:0px_4px_1px_#a3a3a3] active:translate-y-[2px] active:shadow-none",
                                    children: "Come\xe7ar"
                                })
                            }), (0, n.jsx)(E, {})]
                        })
                    })
                },
                D = e => {
                    let {
                        phoneNumber: t,
                        setPhoneNumber: i,
                        handleDynamicForward: a,
                        handleContinuePhone: l
                    } = e;
                    return (0, n.jsxs)(r.E.div, {
                        animate: {
                            opacity: 1,
                            filter: "blur(0px)"
                        },
                        exit: {
                            opacity: 0,
                            filter: "blur(10px)"
                        },
                        transition: {
                            duration: 2,
                            type: "spring"
                        },
                        className: "flex h-full w-full flex-col items-center justify-center ",
                        children: [(0, n.jsx)(c.b, {
                            per: "word",
                            title: "Qual o n\xfamero de telefone deseja investigar?"
                        }), (0, n.jsx)(x.Z, {
                            value: t,
                            setValue: i
                        }), (0, n.jsx)(r.E.button, {
                            initial: {
                                transform: "translateY(200px)"
                            },
                            animate: {
                                transform: "translateY(0px)"
                            },
                            exit: {
                                transform: "translateY(200px)"
                            },
                            onClick: () => {
                                a(), l()
                            },
                            className: "group fixed bottom-28 inline-flex h-12 items-center justify-center overflow-hidden rounded-[12px] border border-neutral-200 bg-transparent bg-zinc-800 px-6 font-medium text-white transition-all [box-shadow:0px_4px_1px_#a3a3a3] active:translate-y-[2px] active:shadow-none",
                            children: "Investigar"
                        })]
                    })
                },
                S = () => (0, n.jsxs)(r.E.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    className: "flex h-full w-full flex-col items-center justify-center",
                    children: [(0, n.jsxs)("div", {
                        className: "relative h-[300px] w-[300px]",
                        children: [(0, n.jsx)("div", {
                            className: "absolute inset-0 h-full w-full animate-ping rounded-full border border-zinc-500",
                            style: {
                                animationDuration: "2s"
                            }
                        }), (0, n.jsx)("div", {
                            className: "absolute inset-0 m-auto h-[250px] w-[250px] animate-ping rounded-full border border-zinc-500 delay-200",
                            style: {
                                animationDuration: "5s"
                            }
                        }), (0, n.jsx)("div", {
                            className: "delay-400 absolute inset-0 m-auto h-[200px] w-[200px] animate-ping rounded-full border border-zinc-500",
                            style: {
                                animationDuration: "6s"
                            }
                        }), (0, n.jsx)(r.E.div, {
                            className: "delay-400 absolute inset-0 m-auto h-[100px] w-[100px] animate-ping rounded-full border border-zinc-500"
                        })]
                    }), (0, n.jsx)(c.b, {
                        size: "lg",
                        title: "Investigando",
                        weight: "semibold",
                        marginBottom: 2
                    }), (0, n.jsx)("p", {
                        className: "text-center mt-2 text-sm font-medium text-white/50",
                        children: "Aguarde alguns instantes enquanto investigamos..."
                    }), (0, n.jsx)("div", {
                        className: "mt-8"
                    })]
                }, "loading"),
                U = e => {
                    let {
                        name: t,
                        handleDynamicForward: i
                    } = e;
                    return (0, n.jsxs)(r.E.div, {
                        initial: {
                            opacity: 0,
                            y: 50
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0,
                            y: -50
                        },
                        className: "flex h-full  w-full flex-col justify-center items-start",
                        children: [(0, n.jsx)(c.b, {
                            marginBottom: 4,
                            per: "word",
                            title: "Descobri que esse n\xfamero est\xe1 associado ao nome:",
                            className: "max-w-[300px]"
                        }), (0, n.jsx)(r.E.div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            transition: {
                                delay: 2
                            },
                            className: "w-full rounded-full border border-zinc-200 shadow bg-zinc-100 p-3",
                            children: (0, n.jsx)("p", {
                                className: "text-center text-base font-semibold text-zinc-800",
                                children: t || "Nome n\xe3o encontrado"
                            })
                        }), (0, n.jsx)("button", {
                            onClick: i,
                            className: "group fixed bottom-28 self-center inline-flex h-12 items-center justify-center overflow-hidden  rounded-[12px] border border-neutral-200 bg-transparent bg-zinc-800 px-6 font-medium text-white transition-all [box-shadow:0px_4px_1px_#a3a3a3] active:translate-y-[2px] active:shadow-none",
                            children: "Continuar"
                        })]
                    }, "name")
                },
                I = e => {
                    let {
                        photo: t,
                        handleDynamicForward: i,
                        handleLocation: l
                    } = e;
                    return (0, n.jsxs)(r.E.div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        className: "flex relative justify-center h-full w-full flex-col items-center",
                        children: [(0, n.jsx)(c.b, {
                            size: "sm",
                            per: "word",
                            title: "Foto do perfil encontrada."
                        }), (0, n.jsxs)(a.qE, {
                            className: "h-32 w-32 rounded-full bg-zinc-100 object-cover",
                            children: [(0, n.jsx)(a.F$, {
                                src: t,
                                alt: "Profile"
                            }), (0, n.jsx)(a.Q5, {
                                children: (0, n.jsx)(a.F$, {
                                    src: "https://www.gravatar.com/avatar?d=mp",
                                    alt: "Profile",
                                    className: "w-full h-full object-cover"
                                })
                            })]
                        }), (0, n.jsx)("button", {
                            onClick: () => {
                                i(), l()
                            },
                            className: "group fixed bottom-8 left-1/2 -translate-x-1/2 inline-flex h-12 items-center justify-center overflow-hidden  rounded-[12px] border border-neutral-200 bg-transparent bg-zinc-800 px-6 font-medium text-white transition-all [box-shadow:0px_4px_1px_#a3a3a3] active:translate-y-[2px] active:shadow-none",
                            children: "Continuar"
                        })]
                    }, "photo")
                },
                A = e => {
                    let {
                        country: t,
                        handleDynamicForward: i,
                        handleCheck: a,
                        directions: l
                    } = e;
                    return (0, n.jsxs)(r.E.div, {
                        initial: {
                            opacity: 0,
                            x: -100
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        exit: {
                            opacity: 0,
                            x: 100
                        },
                        className: "flex h-full w-full flex-col items-center justify-start pt-24",
                        children: [(0, n.jsx)("div", {
                            className: "relative mb-4 flex h-[42px] w-[42px] items-center justify-center rounded-[10px] border border-zinc-500 bg-zinc-700",
                            children: (0, n.jsx)(m.Z, {
                                size: 24
                            })
                        }), (0, n.jsx)(c.b, {
                            per: "word",
                            title: "A localiza\xe7\xe3o deste n\xfamero \xe9 ".concat(cityLoc).concat(", ").concat(countryLoc)
                        }), t && console.log("Renderizando mapa:", t, "Coordenadas:", xLoc, yLoc), (0, n.jsx)("div", {
                            className: "w-full h-[40%]  mb-4 rounded shadow",
                            children: (0, n.jsx)(w.KJ, {
                                googleMapsApiKey: "AIzaSyAxXexsbaBK_FrvwUl7JpQ56zTxptJ-xZg",
                                children: (0, n.jsx)(w.b6, {
                                    options: {
                                        disableDefaultUI: !1,
                                        zoomControl: !1,
                                        disableDoubleClickZoom: !0,
                                        gestureHandling: "none"
                                    },
                                    mapContainerStyle: F,
                                    center: {
                                        lat: Number(xLoc),
                                        lng: Number(yLoc)
                                    },
                                    zoom: 14,
                                    children: (0, n.jsx)(w.Jx, {
                                        position: {
                                            lat: Number(xLoc),
                                            lng: Number(yLoc)
                                        }
                                    })
                                })
                            })
                        }), (0, n.jsx)("button", {
                            onClick: () => {
                                i(), a()
                            },
                            className: "group fixed bottom-28 left-1/2 inline-flex h-12 -translate-x-1/2 items-center justify-center overflow-hidden  rounded-[12px] border border-neutral-200 bg-transparent bg-zinc-800 px-6 font-medium text-white transition-all [box-shadow:0px_4px_1px_#a3a3a3] active:translate-y-[2px] active:shadow-none",
                            children: "Continuar"
                        })]
                    }, "country")
                },
                B = e => {
                    let {
                        step: t,
                        handleDynamicForward: i
                    } = e;
                    return (0, n.jsxs)(r.E.div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            duration: .5
                        },
                        className: "flex h-full flex-col items-center justify-center",
                        children: [(0, n.jsx)(c.b, {
                            size: "lg",
                            per: "word",
                            title: "Encontramos atividades suspeitas...  ",
                            className: "break-normal",
                            weight: "semibold",
                            color: "white",
                            marginBottom: 4
                        }), (0, n.jsx)("button", {
                            onClick: i,
                            className: (0, y.cn)("group fixed bottom-8 left-1/2 inline-flex h-12 -translate-x-1/2 items-center justify-center overflow-hidden  rounded-[12px] border border-neutral-200 bg-transparent bg-zinc-800 px-6 font-medium text-white transition-all [box-shadow:0px_4px_1px_#a3a3a3] active:translate-y-[2px] active:shadow-none", "criticalFound" === t && "bg-white text-black"),
                            children: "Continuar"
                        })]
                    }, "criticalFound")
                },
                O = e => {
                    let {
                        handleDynamicForward: t,
                        results: i
                    } = e;
                    return (0, n.jsxs)(r.E.div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        className: "flex h-full w-full flex-col items-center justify-center",
                        children: [(0, n.jsx)(c.b, {
                            per: "word",
                            className: "text-left",
                            title: "Encontramos algumas atividades suspeitas...",
                            color: "black"
                        }), (0, n.jsxs)(r.E.ul, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                delay: 1
                            },
                            className: " w-full space-y-4 text-lg h-[60%] p-2 bg-zinc-900 rounded-[16px] overflow-hidden overflow-y-auto",
                            children: [null == i ? void 0 : [{platform: "facebook"}, {platform: "skype"}, {platform: "twitter"}].map((e, t) => (0, n.jsxs)(r.E.li, {
                                initial: {
                                    opacity: 0,
                                    y: 20,
                                    filter: "blur(10px)"
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0,
                                    filter: "blur(0px)"
                                },
                                transition: {
                                    delay: t + 1
                                },
                                className: "w-full rounded-xl bg-zinc-700 px-4 py-4",
                                children: [(0, n.jsxs)("div", {
                                    className: "mb-4 flex items-center gap-2",
                                    children: ["facebook" === e.platform ? (0, n.jsx)(f.Z, {
                                        size: 24
                                    }) : "skype" === e.platform ? (0, n.jsx)(h.Z, {
                                        size: 24
                                    }) : "twitter" === e.platform ? (0, n.jsx)(p.Z, {
                                        size: 24
                                    }) : null, (0, n.jsx)("span", {
                                        className: "text-sm font-semibold text-white",
                                        children: e.platform.charAt(0).toUpperCase() + e.platform.slice(1).toLowerCase()
                                    }), (0, n.jsx)("span", {
                                        className: "text-sm font-semibold text-white",
                                        children: "(identificado)"
                                    })]
                                }), (0, n.jsx)("p", {
                                    className: "text-sm font-medium text-white/50",
                                    children: "Frequentemente usado para conversar com desconhecidos"
                                })]
                            }, e)), (0, n.jsxs)(r.E.li, {
                                initial: {
                                    opacity: 0,
                                    y: 20,
                                    filter: "blur(10px)"
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0,
                                    filter: "blur(0px)"
                                },
                                transition: {
                                    delay: i.length + 1
                                },
                                className: "w-full rounded-xl bg-zinc-700 px-4 py-4",
                                children: [(0, n.jsxs)("div", {
                                    className: "mb-4 flex items-center gap-2",
                                    children: [(0, n.jsx)(u.Z, {
                                        size: 24
                                    }), (0, n.jsx)("span", {
                                        className: "text-sm font-semibold text-white",
                                        children: "Tinder"
                                    }), (0, n.jsx)("span", {
                                        className: "text-sm font-semibold text-white",
                                        children: "(n\xe3o identificado)"
                                    })]
                                }), (0, n.jsx)("p", {
                                    className: "text-sm font-medium text-white/50",
                                    children: "Frequentemente usado para se relacionar"
                                })],

                            })]
                        }), 
                            
                        (0, n.jsx)("button", {
                            onClick: () => {
                                const url = new URL(window.location.href); // Obtém a URL atual
                                const investigar = url.searchParams.get("investigar");
                                localStorage.setItem('foto', profilePhoto);
                                const foto = localStorage.getItem('foto');
                                window.location.href=`/app/vazados.html?investigar=${investigar}`;
                            },
                            className: "group fixed bottom-8 left-1/2 inline-flex h-12 -translate-x-1/2 items-center justify-center overflow-hidden  rounded-[12px] border border-neutral-200 bg-transparent bg-white   px-6 font-medium text-zinc-800 transition-all [box-shadow:0px_4px_1px_#a3a3a3] active:translate-y-[2px] active:shadow-none",
                            children: "Continuar"
                        })]
                    }, "result")
                },
                R = e => {
                    let {
                        handleEndStep: t
                    } = e;
                    return (0, n.jsxs)(r.E.div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        className: "flex h-full flex-col items-center justify-center",
                        children: [(0, n.jsx)(c.b, {
                            per: "word",
                            className: "text-[24px]",
                            title: "Quer descobrir mais?"
                        }), (0, n.jsx)("button", {
                            className: "group fixed bottom-[30%] left-1/2 inline-flex h-12 -translate-x-1/2 items-center justify-center overflow-hidden  rounded-[12px] border border-neutral-200 bg-transparent bg-zinc-800 px-6 font-medium text-white transition-all [box-shadow:0px_4px_1px_#a3a3a3] active:translate-y-[2px] active:shadow-none",
                            onClick: () => window.location.href = "/reprovado" + window.location.search,
                            children: "Quero!"
                        })]
                    }, "end")
                };

            function q() {
                let [e, t] = (0, o.useState)(""), [i, a] = (0, o.useState)(""), [c, x] = (0, o.useState)(""), [u, m] = (0, o.useState)(""), [p, f] = (0, o.useState)([]), [h, w] = (0, o.useState)({
                    lat: 0,
                    lng: 0
                }), [g, N] = (0, o.useState)("idle"), [z, _] = (0, o.useState)("confused"), k = () => {
                    let e = ["idle", "phone", "loading", "name", "photo", "loading2", "country", "loading3", "criticalFound", "result", "end"],
                        t = e.indexOf(g); - 1 !== t && t < e.length - 1 && (N(e[t + 1]), _(["confused", "neutral", "happy", "sad", "angry", "confused"][t + 1]))
                }, C = async () => {
    var t, i, n, l, r, s;

    // Armazenar o número de telefone
    v.Z.set("phone_number", e, {
        expires: 60
    });

    // Opções para a requisição da API do WhatsApp
    let options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '338a23ad0dmsh130beef085a979ap19aaf5jsn379661eb93d1',
            'x-rapidapi-host': 'whatsapp-data1.p.rapidapi.com'
        }
    };

    try {
        // Fazendo a chamada para a API do WhatsApp
        let response = await fetch(`https://whatsapp-data1.p.rapidapi.com/number/${e.slice(1)}`, options);
        
        // Verificando se a resposta é bem-sucedida
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        let data = await response.json();
        // Processando o nome
        let name = data.data ? data.data.name : null;
        a(name);
        v.Z.set("name", name, {
            expires: 60
        });

        // Processando a foto
        let profilePic = data.profilePic ? data.profilePic : null; // Supondo que a resposta tenha um campo 'photo'
        profilePhoto = profilePic;
        localStorage.setItem('numero', data.phone);
        v.Z.set("photo", profilePic, {
            expires: 60
        });

    } catch (error) {
        console.error('Error fetching data from WhatsApp API:', error);
    }
}, E = async () => {
                    let {
                        data: t
                    } = await b.Z.post("https://ipinfo.io/json", {
                        number: e.slice(3)
                    }, {
                        timeout: 0
                    });

                    [xLoc, yLoc] = t.loc.split(',').map(Number);
                    cityLoc = t.city;
                    countryLoc = t.country;
                    m(t.location), w({
                        lat: xLoc,
                        lng: yLoc
                    })
                }, F = async () => {
                    f((await b.Z.post("/api/check", {
                        number: e
                    })).data.platformPresenceFacts)
                };
                return (0, o.useEffect)(() => {
                    if (["loading", "loading2", "loading3"].includes(g)) {
                        console.log("loading step");
                        let e = setTimeout(() => {
                            k()
                        }, 2e3);
                        return () => clearTimeout(e)
                    }
                }, [g]), (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)(r.E.div, {
                        className: (0, y.cn)("relative h-screen w-full px-8", "criticalFound" === g ? "animate-flashRed bg-red-500" : "bg-white", "idle" === g && "px-0"),
                        children: ["idle" !== g && (0, n.jsx)(r.E.div, {
                            initial: {
                                opacity: 0,
                                filter: "blur(10px)"
                            },
                            animate: {
                                opacity: 1,
                                filter: "blur(0px)"
                            },
                            exit: {
                                opacity: 0,
                                filter: "blur(10px)"
                            },
                            className: "absolute top-4 w-full",
                            children: (0, n.jsx)(l.E, {
                                className: "h-2 w-[85%]",
                                color: "criticalFound" === g ? "bg-white" : "bg-yellow-500",
                                value: ["idle", "phone", "loading", "name", "photo", "loading2", "country", "loading3", "criticalFound", "result", "end"].indexOf(g) / 10 * 100
                            })
                        }), (0, n.jsx)(d.Z, {
                            step: g,
                            setEmotion: _,
                            emotion: z
                        }), (0, n.jsx)(s.M, {
                            mode: "wait",
                            initial: !1,
                            children: "idle" === g ? (0, n.jsx)(Z, {
                                step: g,
                                setEmotion: _,
                                emotion: z,
                                handleDynamicForward: k
                            }) : "phone" === g ? (0, n.jsx)(D, {
                                phoneNumber: e,
                                setPhoneNumber: t,
                                handleDynamicForward: k,
                                handleContinuePhone: C
                            }) : "loading" === g ? (0, n.jsx)(S, {}) : "name" === g ? (0, n.jsx)(U, {
                                name: i,
                                handleDynamicForward: k
                            }) : "photo" === g ? (0, n.jsx)(I, {
                                photo: c,
                                handleDynamicForward: k,
                                handleLocation: E
                            }) : "loading2" === g ? (0, n.jsx)(S, {}) : "country" === g ? (0, n.jsx)(A, {
                                country: u,
                                handleDynamicForward: k,
                                handleCheck: F,
                                directions: h
                            }) : "loading3" === g ? (0, n.jsx)(S, {}) : "criticalFound" === g ? (0, n.jsx)(B, {
                                step: g,
                                handleDynamicForward: k
                            }) : "result" === g ? (0, n.jsx)(O, {
                                results: p,
                                handleDynamicForward: k
                            }) : "end" === g ? (0, n.jsx)(R, {
                                handleEndStep: () => {
                                    N("idle")
                                }
                            }) : (0, n.jsx)(r.E.div, {
                                children: "Unknown Step"
                            }, "unknown")
                        })]
                    }), (0, n.jsx)(j.Z, {})]
                })
            }
            var P = () => (0, n.jsx)("div", {
                className: "w-full h-screen bg-zinc-800",
                children: (0, n.jsx)("div", {
                    className: "relative mx-auto flex h-screen max-w-[1200px] items-center justify-center overflow-hidden",
                    children: (0, n.jsx)(q, {})
                })
            })
        },
        2649: function(e, t, i) {
            "use strict"; /*! js-cookie v3.0.5 | MIT */
            function n(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var n in i) e[n] = i[n]
                }
                return e
            }
            i.d(t, {
                Z: function() {
                    return a
                }
            });
            var a = function e(t, i) {
                function a(e, a, l) {
                    if ("undefined" != typeof document) {
                        "number" == typeof(l = n({}, i, l)).expires && (l.expires = new Date(Date.now() + 864e5 * l.expires)), l.expires && (l.expires = l.expires.toUTCString()), e = encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
                        var r = "";
                        for (var s in l) l[s] && (r += "; " + s, !0 !== l[s] && (r += "=" + l[s].split(";")[0]));
                        return document.cookie = e + "=" + t.write(a, e) + r
                    }
                }
                return Object.create({
                    set: a,
                    get: function(e) {
                        if ("undefined" != typeof document && (!arguments.length || e)) {
                            for (var i = document.cookie ? document.cookie.split("; ") : [], n = {}, a = 0; a < i.length; a++) {
                                var l = i[a].split("="),
                                    r = l.slice(1).join("=");
                                try {
                                    var s = decodeURIComponent(l[0]);
                                    if (n[s] = t.read(r, s), e === s) break
                                } catch (e) {}
                            }
                            return e ? n[e] : n
                        }
                    },
                    remove: function(e, t) {
                        a(e, "", n({}, t, {
                            expires: -1
                        }))
                    },
                    withAttributes: function(t) {
                        return e(this.converter, n({}, this.attributes, t))
                    },
                    withConverter: function(t) {
                        return e(n({}, this.converter, t), this.attributes)
                    }
                }, {
                    attributes: {
                        value: Object.freeze(i)
                    },
                    converter: {
                        value: Object.freeze(t)
                    }
                })
            }({
                read: function(e) {
                    return '"' === e[0] && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
                },
                write: function(e) {
                    return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
                }
            }, {
                path: "/"
            })
        }
    },
    function(e) {
        e.O(0, [699, 212, 910, 716, 240, 170, 868, 167, 877, 384, 305, 761, 525, 345, 379, 971, 23, 744], function() {
            return e(e.s = 193)
        }), _N_E = e.O()
    }
]);