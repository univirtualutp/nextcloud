(self.webpackChunkphotos=self.webpackChunkphotos||[]).push([["src_views_Folders_vue"],{28356:t=>{t.exports={sizes:{400:{marginTop:66,marginW:8,count:3,folderCount:1},700:{marginTop:66,marginW:8,count:4,folderCount:1},1024:{marginTop:66,marginW:44,count:5,folderCount:2},1280:{marginTop:66,marginW:44,count:4,folderCount:2},1440:{marginTop:88,marginW:66,count:5,folderCount:3},1600:{marginTop:88,marginW:66,count:6,folderCount:4},2048:{marginTop:88,marginW:66,count:7,folderCount:4},2560:{marginTop:88,marginW:88,count:8,folderCount:6},3440:{marginTop:88,marginW:88,count:9,folderCount:8},max:{marginTop:88,marginW:88,count:10,folderCount:10}}}},58637:(t,e,n)=>{"use strict";n.d(e,{A:()=>i});const i={name:"AbortControllerMixin",data:()=>({abortController:new AbortController}),beforeDestroy(){this.abortController.abort()},beforeRouteLeave(t,e,n){this.abortController.abort(),this.abortController=new AbortController,n()}}},36200:(t,e,n)=>{"use strict";n.d(e,{A:()=>s});var i=n(71354),a=n.n(i),o=n(76314),r=n.n(o)()(a());r.push([t.id,".file[data-v-061ecc04]{position:relative;display:flex;align-items:center;justify-content:center;-webkit-user-select:none;user-select:none;border-radius:var(--border-radius);overflow:hidden}.file .cover[data-v-061ecc04]{z-index:2;width:100%;padding-bottom:100%;transition:opacity var(--animation-quick) ease-in-out;opacity:0;background-color:var(--color-main-text)}.file.active .cover[data-v-061ecc04],.file:active .cover[data-v-061ecc04],.file:hover .cover[data-v-061ecc04],.file:focus .cover[data-v-061ecc04]{opacity:.3}.file--clear.active .cover[data-v-061ecc04],.file--clear:active .cover[data-v-061ecc04],.file--clear:hover .cover[data-v-061ecc04],.file--clear:focus .cover[data-v-061ecc04]{opacity:.1}.fade-enter-active[data-v-061ecc04],.fade-leave-active[data-v-061ecc04]{transition:opacity var(--animation-quick) ease-in-out}.fade-enter[data-v-061ecc04],.fade-leave-to[data-v-061ecc04]{opacity:0}.transition-group[data-v-061ecc04]{display:contents}.icon-video-white[data-v-061ecc04]{position:absolute;top:10px;right:10px;z-index:20}img[data-v-061ecc04]{position:absolute;width:100%;height:100%;z-index:10;color:rgba(0,0,0,0);object-fit:contain}.file--cropped img[data-v-061ecc04]{object-fit:cover}svg[data-v-061ecc04]{position:absolute;width:70%;height:70%}","",{version:3,sources:["webpack://./src/mixins/FileFolder.scss","webpack://./src/components/FileLegacy.vue"],names:[],mappings:"AAKA,uBACC,iBAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,wBAAA,CAAA,gBAAA,CACA,kCAAA,CACA,eAAA,CAEA,8BACC,SAAA,CAMA,UAAA,CACA,mBAAA,CACA,qDAAA,CACA,SAAA,CACA,uCAAA,CAOA,kJACC,UAAA,CAQD,8KACC,UAAA,CAKH,wEACC,qDAAA,CAGD,6DACC,SAAA,CChDD,mCACC,gBAAA,CAGD,mCACC,iBAAA,CACA,QAAA,CACA,UAAA,CACA,UAAA,CAGD,qBACC,iBAAA,CACA,UAAA,CACA,WAAA,CACA,UAAA,CAEA,mBAAA,CAEA,kBAAA,CAEA,oCACC,gBAAA,CAIF,qBACC,iBAAA,CACA,SAAA,CACA,UAAA",sourcesContent:["/**\n * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors\n * SPDX-License-Identifier: AGPL-3.0-or-later\n */\n\n.file {\n\tposition: relative;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tuser-select: none;\n\tborder-radius: var(--border-radius);\n\toverflow: hidden;\n\n\t.cover {\n\t\tz-index: 2;\n\t\t// We want nice squares despite anything that is in it.\n\t\t// The .cover is what makes the exact square size of the grid.\n\t\t// We use padding-bottom because padding with percentage\n\t\t// always refers to the width. And we only want to fit\n\t\t// the css grid's width.\n\t\twidth: 100%;\n\t\tpadding-bottom: 100%;\n\t\ttransition: opacity var(--animation-quick) ease-in-out;\n\t\topacity: 0;\n\t\tbackground-color: var(--color-main-text);\n\t}\n\n\t&.active,\n\t&:active,\n\t&:hover,\n\t&:focus {\n\t\t.cover {\n\t\t\topacity: .3;\n\t\t}\n\t}\n\n\t&--clear.active,\n\t&--clear:active,\n\t&--clear:hover,\n\t&--clear:focus {\n\t\t.cover {\n\t\t\topacity: .1;\n\t\t}\n\t}\n}\n\n.fade-enter-active, .fade-leave-active {\n\ttransition: opacity var(--animation-quick) ease-in-out;\n}\n\n.fade-enter, .fade-leave-to {\n\topacity: 0;\n}\n",'$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n@import \'../mixins/FileFolder\';\n\n.transition-group {\n\tdisplay: contents;\n}\n\n.icon-video-white {\n\tposition: absolute;\n\ttop: 10px;\n\tright: 10px;\n\tz-index: 20;\n}\n\nimg {\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n\tz-index: 10;\n\n\tcolor: transparent; // should be diplayed on error\n\n\tobject-fit: contain;\n\n\t.file--cropped & {\n\t\tobject-fit: cover;\n\t}\n}\n\nsvg {\n\tposition: absolute;\n\twidth: 70%;\n\theight: 70%;\n}\n'],sourceRoot:""}]);const s=r},15853:(t,e,n)=>{"use strict";n.d(e,{A:()=>s});var i=n(71354),a=n.n(i),o=n(76314),r=n.n(o)()(a());r.push([t.id,".file[data-v-1c155c06]{position:relative;display:flex;align-items:center;justify-content:center;-webkit-user-select:none;user-select:none;border-radius:var(--border-radius);overflow:hidden}.file .cover[data-v-1c155c06]{z-index:2;width:100%;padding-bottom:100%;transition:opacity var(--animation-quick) ease-in-out;opacity:0;background-color:var(--color-main-text)}.file.active .cover[data-v-1c155c06],.file:active .cover[data-v-1c155c06],.file:hover .cover[data-v-1c155c06],.file:focus .cover[data-v-1c155c06]{opacity:.3}.file--clear.active .cover[data-v-1c155c06],.file--clear:active .cover[data-v-1c155c06],.file--clear:hover .cover[data-v-1c155c06],.file--clear:focus .cover[data-v-1c155c06]{opacity:.1}.fade-enter-active[data-v-1c155c06],.fade-leave-active[data-v-1c155c06]{transition:opacity var(--animation-quick) ease-in-out}.fade-enter[data-v-1c155c06],.fade-leave-to[data-v-1c155c06]{opacity:0}.folder-content[data-v-1c155c06]{position:absolute;display:grid;width:100%;height:100%}.folder-content--grid-1[data-v-1c155c06]{grid-template-columns:1fr;grid-template-rows:1fr}.folder-content--grid-2[data-v-1c155c06]{grid-template-columns:1fr;grid-template-rows:1fr 1fr}.folder-content--grid-3[data-v-1c155c06]{grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr}.folder-content--grid-3 img[data-v-1c155c06]:first-child{grid-column:span 2}.folder-content--grid-4[data-v-1c155c06]{grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr}.folder-content img[data-v-1c155c06]{width:100%;height:100%;object-fit:cover}.folder-name[data-v-1c155c06]{position:absolute;z-index:3;display:flex;overflow:hidden;flex-direction:column;width:100%;height:100%;transition:opacity var(--animation-quick) ease-in-out;opacity:1}.folder-name__icon[data-v-1c155c06]{height:40%;margin-top:calc(30% - 1rem / 2);background-size:40%}.folder-name__name[data-v-1c155c06]{overflow:hidden;height:1rem;padding:0 10px;text-align:center;white-space:nowrap;text-overflow:ellipsis;color:var(--color-main-background);text-shadow:0 0 8px var(--color-main-text);font-size:1rem;line-height:1rem}.folder--clear .folder-name__icon[data-v-1c155c06]{opacity:.3}.folder--clear .folder-name__name[data-v-1c155c06]{color:var(--color-main-text);text-shadow:0 0 8px var(--color-main-background)}.folder:not(.folder--clear) .cover[data-v-1c155c06]{opacity:.3}.folder:not(.folder--clear).active .folder-name[data-v-1c155c06],.folder:not(.folder--clear).active .cover[data-v-1c155c06],.folder:not(.folder--clear):active .folder-name[data-v-1c155c06],.folder:not(.folder--clear):active .cover[data-v-1c155c06],.folder:not(.folder--clear):hover .folder-name[data-v-1c155c06],.folder:not(.folder--clear):hover .cover[data-v-1c155c06],.folder:not(.folder--clear):focus .folder-name[data-v-1c155c06],.folder:not(.folder--clear):focus .cover[data-v-1c155c06]{opacity:0}","",{version:3,sources:["webpack://./src/mixins/FileFolder.scss","webpack://./src/components/Folder.vue"],names:[],mappings:"AAKA,uBACC,iBAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,wBAAA,CAAA,gBAAA,CACA,kCAAA,CACA,eAAA,CAEA,8BACC,SAAA,CAMA,UAAA,CACA,mBAAA,CACA,qDAAA,CACA,SAAA,CACA,uCAAA,CAOA,kJACC,UAAA,CAQD,8KACC,UAAA,CAKH,wEACC,qDAAA,CAGD,6DACC,SAAA,CChDD,iCACC,iBAAA,CACA,YAAA,CACA,UAAA,CACA,WAAA,CAEA,yCACC,yBAAA,CACA,sBAAA,CAED,yCACC,yBAAA,CACA,0BAAA,CAED,yCACC,6BAAA,CACA,0BAAA,CACA,yDACC,kBAAA,CAGF,yCACC,6BAAA,CACA,0BAAA,CAED,qCACC,UAAA,CACA,WAAA,CAEA,gBAAA,CAMF,8BACC,iBAAA,CACA,SAAA,CACA,YAAA,CACA,eAAA,CACA,qBAAA,CACA,UAAA,CACA,WAAA,CACA,qDAAA,CACA,SAAA,CACA,oCACC,UAAA,CACA,+BAAA,CACA,mBAAA,CAED,oCACC,eAAA,CACA,WAnBY,CAoBZ,cAAA,CACA,iBAAA,CACA,kBAAA,CACA,sBAAA,CACA,kCAAA,CACA,0CAAA,CACA,cA1BY,CA2BZ,gBA3BY,CAmCZ,mDACC,UAAA,CAED,mDACC,4BAAA,CACA,gDAAA,CAQD,oDACC,UAAA,CASA,4eAEC,SAAA",sourcesContent:["/**\n * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors\n * SPDX-License-Identifier: AGPL-3.0-or-later\n */\n\n.file {\n\tposition: relative;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tuser-select: none;\n\tborder-radius: var(--border-radius);\n\toverflow: hidden;\n\n\t.cover {\n\t\tz-index: 2;\n\t\t// We want nice squares despite anything that is in it.\n\t\t// The .cover is what makes the exact square size of the grid.\n\t\t// We use padding-bottom because padding with percentage\n\t\t// always refers to the width. And we only want to fit\n\t\t// the css grid's width.\n\t\twidth: 100%;\n\t\tpadding-bottom: 100%;\n\t\ttransition: opacity var(--animation-quick) ease-in-out;\n\t\topacity: 0;\n\t\tbackground-color: var(--color-main-text);\n\t}\n\n\t&.active,\n\t&:active,\n\t&:hover,\n\t&:focus {\n\t\t.cover {\n\t\t\topacity: .3;\n\t\t}\n\t}\n\n\t&--clear.active,\n\t&--clear:active,\n\t&--clear:hover,\n\t&--clear:focus {\n\t\t.cover {\n\t\t\topacity: .1;\n\t\t}\n\t}\n}\n\n.fade-enter-active, .fade-leave-active {\n\ttransition: opacity var(--animation-quick) ease-in-out;\n}\n\n.fade-enter, .fade-leave-to {\n\topacity: 0;\n}\n",'$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n@import \'../mixins/FileFolder\';\n\n.folder-content {\n\tposition: absolute;\n\tdisplay: grid;\n\twidth: 100%;\n\theight: 100%;\n\t// folder layout if less than 4 pictures\n\t&--grid-1 {\n\t\tgrid-template-columns: 1fr;\n\t\tgrid-template-rows: 1fr;\n\t}\n\t&--grid-2 {\n\t\tgrid-template-columns: 1fr;\n\t\tgrid-template-rows: 1fr 1fr;\n\t}\n\t&--grid-3 {\n\t\tgrid-template-columns: 1fr 1fr;\n\t\tgrid-template-rows: 1fr 1fr;\n\t\timg:first-child {\n\t\t\tgrid-column: span 2;\n\t\t}\n\t}\n\t&--grid-4 {\n\t\tgrid-template-columns: 1fr 1fr;\n\t\tgrid-template-rows: 1fr 1fr;\n\t}\n\timg {\n\t\twidth: 100%;\n\t\theight: 100%;\n\n\t\tobject-fit: cover;\n\t}\n}\n\n$name-height: 1rem;\n\n.folder-name {\n\tposition: absolute;\n\tz-index: 3;\n\tdisplay: flex;\n\toverflow: hidden;\n\tflex-direction: column;\n\twidth: 100%;\n\theight: 100%;\n\ttransition: opacity var(--animation-quick) ease-in-out;\n\topacity: 1;\n\t&__icon {\n\t\theight: 40%;\n\t\tmargin-top: calc(30% - #{$name-height} / 2); // center name+icon\n\t\tbackground-size: 40%;\n\t}\n\t&__name {\n\t\toverflow: hidden;\n\t\theight: $name-height;\n\t\tpadding: 0 10px;\n\t\ttext-align: center;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t\tcolor: var(--color-main-background);\n\t\ttext-shadow: 0 0 8px var(--color-main-text);\n\t\tfont-size: $name-height;\n\t\tline-height: $name-height;\n\t}\n}\n\n// Cover management empty/full\n.folder {\n\t// if no img, let\'s display the folder icon as default black\n\t&--clear {\n\t\t.folder-name__icon {\n\t\t\topacity: .3;\n\t\t}\n\t\t.folder-name__name {\n\t\t\tcolor: var(--color-main-text);\n\t\t\ttext-shadow: 0 0 8px var(--color-main-background);\n\t\t}\n\t}\n\n\t// show the cover as background\n\t// if  there are pictures in it\n\t// so we can sho the folder+name above it\n\t&:not(.folder--clear) {\n\t\t.cover {\n\t\t\topacity: .3;\n\t\t}\n\n\t\t// hide everything but pictures\n\t\t// on hover/active/focus\n\t\t&.active,\n\t\t&:active,\n\t\t&:hover,\n\t\t&:focus {\n\t\t\t.folder-name,\n\t\t\t.cover {\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t}\n\t}\n}\n\n'],sourceRoot:""}]);const s=r},63431:(t,e,n)=>{"use strict";n.d(e,{A:()=>s});var i=n(71354),a=n.n(i),o=n(76314),r=n.n(o)()(a());r.push([t.id,".folder[data-v-1600f896]{display:flex;flex-direction:column;padding:16px;border-radius:var(--border-radius-large)}.folder[data-v-1600f896]:hover,.folder[data-v-1600f896]:focus{background-color:var(--color-background-dark)}.folder__image[data-v-1600f896]{width:200px;height:200px;object-fit:cover;border-radius:var(--border-radius-large)}.folder__image--placeholder[data-v-1600f896]{background-color:var(--color-primary-element-light)}.folder__icon[data-v-1600f896]{width:100%;height:100%}.folder__details[data-v-1600f896]{display:flex;align-items:center;gap:12px;margin-top:16px;width:200px}.folder__title[data-v-1600f896]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:20px;margin-bottom:2px;line-height:30px;color:var(--color-main-text)}","",{version:3,sources:["webpack://./src/components/FolderTagPreview.vue"],names:[],mappings:"AAEA,yBACC,YAAA,CACA,qBAAA,CACA,YAAA,CACA,wCAAA,CAEA,8DAEC,6CAAA,CAGD,gCACC,WAAA,CACA,YAAA,CACA,gBAAA,CACA,wCAAA,CAEA,6CACC,mDAAA,CAIF,+BACC,UAAA,CACA,WAAA,CAGD,kCACC,YAAA,CACA,kBAAA,CACA,QAAA,CACA,eAAA,CACA,WAAA,CAGD,gCACC,eAAA,CACA,kBAAA,CACA,sBAAA,CACA,cAAA,CACA,iBAAA,CACA,gBAAA,CACA,4BAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n.folder {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 16px;\n\tborder-radius: var(--border-radius-large);\n\n\t&:hover,\n\t&:focus {\n\t\tbackground-color: var(--color-background-dark);\n\t}\n\n\t&__image {\n\t\twidth: 200px;\n\t\theight: 200px;\n\t\tobject-fit: cover;\n\t\tborder-radius: var(--border-radius-large);\n\n\t\t&--placeholder {\n\t\t\tbackground-color: var(--color-primary-element-light);\n\t\t}\n\t}\n\n\t&__icon {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t}\n\n\t&__details {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tgap: 12px;\n\t\tmargin-top: 16px;\n\t\twidth: 200px;\n\t}\n\n\t&__title {\n\t\toverflow: hidden;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t\tfont-size: 20px;\n\t\tmargin-bottom: 2px;\n\t\tline-height: 30px;\n\t\tcolor: var(--color-main-text);\n\t}\n}\n'],sourceRoot:""}]);const s=r},8351:(t,e,n)=>{"use strict";n.d(e,{A:()=>s});var i=n(71354),a=n.n(i),o=n(76314),r=n.n(o)()(a());r.push([t.id,".photos-navigation[data-v-544b8840]{position:sticky;z-index:20;top:0;display:flex;flex-wrap:wrap;gap:calc(2*var(--app-navigation-padding));align-items:center;justify-content:flex-start;width:100%;padding-inline:calc(var(--default-clickable-area) + 2*var(--app-navigation-padding)) var(--app-navigation-padding);padding-block:var(--app-navigation-padding);background:var(--color-main-background)}.photos-navigation__back[data-v-544b8840]{position:absolute !important;left:var(--app-navigation-padding)}.photos-navigation__title[data-v-544b8840]{max-width:45%;display:flex;flex-direction:column}.photos-navigation__title__main[data-v-544b8840]{cursor:pointer;font-weight:700;font-size:20px;line-height:44px}.photos-navigation__title__main[data-v-544b8840],.photos-navigation__title__sub[data-v-544b8840]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.photos-navigation__loader[data-v-544b8840]{margin-inline-start:32px}.photos-navigation__content-right[data-v-544b8840]{display:flex;align-items:center;justify-content:center;margin-inline-start:auto}","",{version:3,sources:["webpack://./src/components/HeaderNavigation.vue"],names:[],mappings:"AAEA,oCACC,eAAA,CACA,UAAA,CACA,KAAA,CACA,YAAA,CAEA,cAAA,CACA,yCAAA,CACA,kBAAA,CACA,0BAAA,CACA,UAAA,CAEA,kHAAA,CAEA,2CAAA,CACA,uCAAA,CAEA,0CAEC,4BAAA,CACA,kCAAA,CAGD,2CACC,aAAA,CACA,YAAA,CACA,qBAAA,CAEA,iDACC,cAAA,CACA,eAAA,CACA,cAAA,CACA,gBAAA,CAGD,iGACC,eAAA,CACA,kBAAA,CACA,sBAAA,CAIF,4CACC,wBAAA,CAGD,mDACC,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,wBAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n.photos-navigation {\n\tposition: sticky;\n\tz-index: 20;\n\ttop: 0;\n\tdisplay: flex;\n\t// We need to wrap on small devices for accessibility\n\tflex-wrap: wrap;\n\tgap: calc(2 * var(--app-navigation-padding));\n\talign-items: center;\n\tjustify-content: flex-start;\n\twidth: 100%;\n\t// Ensure to not overlap with app navigation toggle\n\tpadding-inline: calc(var(--default-clickable-area) + 2 * var(--app-navigation-padding)) var(--app-navigation-padding);\n\t// Align with app navigation toggle\n\tpadding-block: var(--app-navigation-padding);\n\tbackground: var(--color-main-background);\n\n\t&__back {\n\t\t// Replaces the app navigation button\n\t\tposition: absolute !important;\n\t\tleft: var(--app-navigation-padding);\n\t}\n\n\t&__title {\n\t\tmax-width: 45%;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\n\t\t&__main {\n\t\t\tcursor: pointer;\n\t\t\tfont-weight: 700;\n\t\t\tfont-size: 20px;\n\t\t\tline-height: 44px;\n\t\t}\n\n\t\t&__main, &__sub {\n\t\t\toverflow: hidden;\n\t\t\twhite-space: nowrap;\n\t\t\ttext-overflow: ellipsis;\n\t\t}\n\t}\n\n\t&__loader {\n\t\tmargin-inline-start: 32px;\n\t}\n\n\t&__content-right {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tmargin-inline-start: auto;\n\t}\n}\n\n'],sourceRoot:""}]);const s=r},9703:(t,e,n)=>{"use strict";n.d(e,{A:()=>s});var i=n(71354),a=n.n(i),o=n(76314),r=n.n(o)()(a());r.push([t.id,"@media(min-width: 0px)and (max-width: 400px){.grid-container[data-v-e15d9a08]{padding:0px 8px 256px 8px}}@media(min-width: 400px)and (max-width: 700px){.grid-container[data-v-e15d9a08]{padding:0px 8px 256px 8px}}@media(min-width: 700px)and (max-width: 1024px){.grid-container[data-v-e15d9a08]{padding:0px 44px 256px 44px}}@media(min-width: 1024px)and (max-width: 1280px){.grid-container[data-v-e15d9a08]{padding:0px 44px 256px 44px}}@media(min-width: 1280px)and (max-width: 1440px){.grid-container[data-v-e15d9a08]{padding:0px 66px 256px 66px}}@media(min-width: 1440px)and (max-width: 1600px){.grid-container[data-v-e15d9a08]{padding:0px 66px 256px 66px}}@media(min-width: 1600px)and (max-width: 2048px){.grid-container[data-v-e15d9a08]{padding:0px 66px 256px 66px}}@media(min-width: 2048px)and (max-width: 2560px){.grid-container[data-v-e15d9a08]{padding:0px 88px 256px 88px}}@media(min-width: 2560px)and (max-width: 3440px){.grid-container[data-v-e15d9a08]{padding:0px 88px 256px 88px}}@media(min-width: 3440px){.grid-container[data-v-e15d9a08]{padding:0px 88px 256px 88px}}.grid-container--folders[data-v-e15d9a08]{padding:32px 48px}@media only screen and (max-width: 400px){.grid-container--folders[data-v-e15d9a08]{display:flex;justify-content:center;width:100%}}@media only screen and (min-width: 400px){.grid-container--folders[data-v-e15d9a08]{width:-moz-fit-content;width:fit-content}}.photos-navigation[data-v-e15d9a08]{position:relative}.photos-navigation--uploading[data-v-e15d9a08]{margin-bottom:30px}.photos-navigation[data-v-e15d9a08] .upload-picker .upload-picker__progress{position:absolute;bottom:-30px;left:64px;margin:0}.photos-navigation[data-v-e15d9a08] .upload-picker .upload-picker__cancel{position:absolute;bottom:-24px;right:50px}","",{version:3,sources:["webpack://./src/mixins/GridSizes.scss","webpack://./src/views/Folders.vue"],names:[],mappings:"AAmBG,6CCfH,iCAEE,yBAAA,CAAA,CDaC,+CCfH,iCAEE,yBAAA,CAAA,CDaC,gDCfH,iCAEE,2BAAA,CAAA,CDaC,iDCfH,iCAEE,2BAAA,CAAA,CDaC,iDCfH,iCAEE,2BAAA,CAAA,CDaC,iDCfH,iCAEE,2BAAA,CAAA,CDaC,iDCfH,iCAEE,2BAAA,CAAA,CDaC,iDCfH,iCAEE,2BAAA,CAAA,CDaC,iDCfH,iCAEE,2BAAA,CAAA,CDSC,0BCXH,iCAEE,2BAAA,CAAA,CAED,0CACC,iBAAA,CACA,0CAFD,0CAGE,YAAA,CACA,sBAAA,CACA,UAAA,CAAA,CAED,0CAPD,0CAQE,sBAAA,CAAA,iBAAA,CAAA,CAKH,oCACC,iBAAA,CAGA,+CACC,kBAAA,CAIA,4EACC,iBAAA,CACA,YAAA,CACA,SAAA,CACA,QAAA,CAGD,0EACC,iBAAA,CACA,YAAA,CACA,UAAA",sourcesContent:["/**\n * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors\n * SPDX-License-Identifier: AGPL-3.0-or-later\n */\n@use 'sass:map';\n\n@mixin grid-sizes() {\n\t$previous: 0;\n\n\t@each $size, $config in $sizes {\n\t\t$count: map.get($config, 'count');\n\t\t$marginTop: map.get($config, 'marginTop');\n\t\t$marginW: map.get($config, 'marginW');\n\n\t\t@if $size == 'max' {\n\t\t\t@media (min-width: #{$previous}px) {\n\t\t\t\t@content($marginTop, $marginW);\n\t\t\t}\n\t\t} @else {\n\t\t\t@media (min-width: #{$previous}px) and (max-width: #{$size}px) {\n\t\t\t\t@content($marginTop, $marginW);\n\t\t\t}\n\t\t}\n\t\t$previous: $size;\n\t}\n}\n",'$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n@import \'../mixins/GridSizes\';\n\n.grid-container {\n\t@include grid-sizes using ($marginTop, $marginW) {\n\t\tpadding: 0px #{$marginW}px 256px #{$marginW}px;\n\t}\n\t&--folders {\n\t\tpadding: 32px 48px;\n\t\t@media only screen and (max-width: 400px) {\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: center;\n\t\t\twidth: 100%;\n\t\t}\n\t\t@media only screen and (min-width: 400px) {\n\t\t\twidth: fit-content;\n\t\t}\n\t}\n}\n\n.photos-navigation {\n\tposition: relative;\n\n\t// Add space at the bottom for the progress bar.\n\t&--uploading {\n\t\tmargin-bottom: 30px;\n\t}\n\n\t:deep(.upload-picker) {\n\t\t.upload-picker__progress {\n\t\t\tposition: absolute;\n\t\t\tbottom: -30px;\n\t\t\tleft: 64px;\n\t\t\tmargin: 0;\n\t\t}\n\n\t\t.upload-picker__cancel {\n\t\t\tposition: absolute;\n\t\t\tbottom: -24px;\n\t\t\tright: 50px;\n\t\t}\n\t}\n}\n'],sourceRoot:""}]);const s=r},16482:(e,n,i)=>{"use strict";i.d(n,{A:()=>w});var a=i(55028),o=i(76333);const r={name:"HeaderNavigation",components:{ArrowLeft:a.A,NcButton:o.x1,NcLoadingIcon:o.ne},inheritAttrs:!1,props:{loading:{type:Boolean,default:!1},path:{type:String,default:"/"},title:{type:String,required:!0},rootTitle:{type:String,default:t("photos","Photos")},params:{type:Object,default:null}},computed:{isRoot(){const t="/"===this.path;return this.toggleNavigationButton(!t),t},name(){return this.isRoot?this.rootTitle:this.title},parentPath(){const t=this.path.split("/");t.pop();const e=t.join("/");return this.isRoot||""===e.trim()?"/":t.join("/")},parentName(){return this.parentPath&&this.parentPath.split("/").pop()},backToText(){return"/"===this.parentPath?t("photos","Back to {folder}",{folder:this.rootTitle}):t("photos","Back to {folder}",{folder:this.parentName})},to(){const t=/^\/?(.*)/i.exec(this.parentPath)[1],{name:e,params:n}=Object.assign({},this.$route,{params:this.params||{path:t}});return""===t?{name:e}:decodeURIComponent(this.$router.resolve({name:e,params:n}).resolved.path)}},methods:{folderUp(){this.$router.push(this.to)},refresh(){this.$emit("refresh")},toggleNavigationButton(t){const e=document.querySelector("button.app-navigation-toggle");null!==e&&(e.style.display=t?"none":null)}}};var s=i(85072),d=i.n(s),A=i(97825),l=i.n(A),c=i(77659),p=i.n(c),g=i(55056),m=i.n(g),C=i(10540),h=i.n(C),f=i(41113),u=i.n(f),v=i(8351),x={};x.styleTagTransform=u(),x.setAttributes=m(),x.insert=p().bind(null,"head"),x.domAPI=l(),x.insertStyleElement=h();d()(v.A,x);v.A&&v.A.locals&&v.A.locals;const w=(0,i(14486).A)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"photos-navigation",class:{"photos-navigation--root":t.isRoot},attrs:{role:"toolbar"}},[t.isRoot?t._e():e("NcButton",{staticClass:"photos-navigation__back",attrs:{"aria-label":t.t("photos","Go back"),type:"tertiary"},on:{click:t.folderUp},scopedSlots:t._u([{key:"icon",fn:function(){return[e("ArrowLeft",{attrs:{size:20}})]},proxy:!0}],null,!1,1821202730)}),t._v(" "),e("div",{staticClass:"photos-navigation__title"},[e("h1",{staticClass:"photos-navigation__title__main",on:{click:t.refresh}},[t._v("\n\t\t\t"+t._s(t.name)+"\n\t\t")]),t._v(" "),e("div",{staticClass:"photos-navigation__title__sub"}),t._v(" "),t._t("subtitle")],2),t._v(" "),t.$slots.default?e("div",{staticClass:"photos-navigation__content"},[t._t("default")],2):t._e(),t._v(" "),e("NcLoadingIcon",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"photos-navigation__loader"}),t._v(" "),e("div",{staticClass:"photos-navigation__content-right"},[t._t("right")],2)],1)}),[],!1,null,"544b8840",null).exports},41762:(e,n,i)=>{"use strict";i.r(n),i.d(n,{default:()=>V});var a=i(35810),o=i(95353),r=i(76333),s=i(26454),d=i(87910),A=i(33239),l=i(63814);const c={name:"FileLegacy",inheritAttrs:!1,props:{item:{type:Object,required:!0}},data:()=>({loaded:!1,error:!1}),computed:{ariaUuid(){return`image-${this.item.injected.fileid}`},ariaLabel(){return t("photos",'Open the full size "{name}" image',{name:this.item.injected.basename})},isImage(){return this.item.injected.mime.startsWith("image")},decodedEtag(){return this.item.injected.etag.replace("&quot;","").replace("&quot;","")},src(){return(0,l.Jv)(`/core/preview?fileId=${this.item.injected.fileid}&c=${this.decodedEtag}&x=250&y=250&forceIcon=0&a=${this.croppedLayout?"0":"1"}`)},croppedLayout(){return this.$store.state.userConfig.croppedLayout}},beforeDestroy(){this.$refs.src=""},methods:{openViewer(){OCA.Viewer.open({fileInfo:this.item.injected,list:this.item.injected.list,loadMore:this.item.injected.loadMore?async()=>await this.item.injected.loadMore(!0):()=>[],canLoop:this.item.injected.canLoop})},onLoad(){this.loaded=!0},onError(){this.error=!0}}};var p=i(85072),g=i.n(p),m=i(97825),C=i.n(m),h=i(77659),f=i.n(h),u=i(55056),v=i.n(u),x=i(10540),w=i.n(x),b=i(41113),y=i.n(b),_=i(36200),k={};k.styleTagTransform=y(),k.setAttributes=v(),k.insert=f().bind(null,"head"),k.domAPI=C(),k.insertStyleElement=w();g()(_.A,k);_.A&&_.A.locals&&_.A.locals;var B=i(14486);const T=(0,B.A)(c,(function(){var t=this,e=t._self._c;return e("a",{staticClass:"file",class:{"file--cropped":t.croppedLayout},attrs:{href:t.item.injected.source,"aria-label":t.ariaLabel},on:{click:function(e){return e.preventDefault(),t.openViewer.apply(null,arguments)}}},[t.item.injected.mime.includes("video")&&t.item.injected.hasPreview?e("div",{staticClass:"icon-video-white"}):t._e(),t._v(" "),e("transition-group",{staticClass:"transition-group",attrs:{name:"fade"}},[t.error?t._e():e("img",{key:`${t.item.injected.basename}-img`,ref:"img",attrs:{src:t.src,alt:t.item.injected.basename,"aria-describedby":t.ariaUuid},on:{load:t.onLoad,error:t.onError}}),t._v(" "),!t.loaded||t.error?e("svg",{key:`${t.item.injected.basename}-svg`,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"url(#placeholder__gradient)"}},[t.isImage?e("use",{attrs:{href:"#placeholder--img"}}):e("use",{attrs:{href:"#placeholder--video"}})]):t._e()]),t._v(" "),e("p",{staticClass:"hidden-visually",attrs:{id:t.ariaUuid}},[t._v(t._s(t.item.injected.basename))]),t._v(" "),e("div",{staticClass:"cover",attrs:{role:"none"}})],1)}),[],!1,null,"061ecc04",null).exports;var W=i(21777);const F={name:"FolderTagPreview",components:{Folder:d.A},props:{icon:{type:String,default:"icon-folder"},id:{type:[Number,String],required:!0},name:{type:String,required:!0},path:{type:String,default:""},fileList:{type:Array,default:()=>[]},to:{type:Object,default:null}},data:()=>({failed:[]}),computed:{isEmpty(){return 0===this.previewList.length},ariaLabel(){return t("photos",'Open the "{name}" folder',{name:this.name})},previewList(){return this.fileList.filter((t=>-1===this.failed.indexOf(t.fileid)))},previewUrl(){if(0===this.previewList.length)return null;const{fileid:t,etag:e}=this.previewList.at(-1);return(0,l.Jv)(`/core/preview?fileId=${t}&c=${e}&x=250&y=250&forceIcon=0&a=0`)},toLink(){if(this.to)return this.to;const t=`/files/${(0,W.HW)()?.uid}`;let e=this.path.replace(new RegExp(`^${t}`),"");return e=/^\/?(.+)/i.exec(e)[1],Object.assign({},this.$route,{params:{path:e.split("/")}})}},methods:{onPreviewFail(t){let{fileid:e}=t;this.failed.push(e)}}};var E=i(63431),$={};$.styleTagTransform=y(),$.setAttributes=v(),$.insert=f().bind(null,"head"),$.domAPI=C(),$.insertStyleElement=w();g()(E.A,$);E.A&&E.A.locals&&E.A.locals;const D=(0,B.A)(F,(function(){var t=this,e=t._self._c;return e("router-link",{staticClass:"folder",attrs:{to:t.toLink,"aria-label":t.ariaLabel}},[t.previewUrl?e("img",{staticClass:"folder__image",attrs:{src:t.previewUrl,alt:""},on:{error:function(e){return t.onPreviewFail(t.file)}}}):e("span",{staticClass:"folder__image folder__image--placeholder"},[e("Folder",{staticClass:"folder__icon",attrs:{size:96,"fill-color":"var(--color-primary-element)"}})],1),t._v(" "),e("span",{staticClass:"folder__details"},[e("Folder"),t._v(" "),e("span",{staticClass:"folder__title"},[t._v(t._s(t.name))])],1)])}),[],!1,null,"1600f896",null).exports;var z=i(26287),j=i(83984),S=i(98429);async function L(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=(0,l.Jv)("/apps/photos/api/v1/"+(e.shared?"shared":"albums")),i=`/files/${(0,W.HW)()?.uid}`,a=(await z.A.get(n+(0,j.mF)(t),e)).data.map((t=>({...t,filename:`${i}${t.filename}`}))).map((t=>(0,j.JR)(t)));let o={};const r=[],s=[];for(const e of a)e.filename===`${i}${t}`?o=e:"file"!==e.type?r.push(e):S.Ay.indexOf(e.mime)>-1&&s.push(e);return{folder:o,folders:r,files:s}}var I=i(58637);const U={name:"Folder",components:{FolderTagPreview:D},mixins:[I.A],inheritAttrs:!1,props:{item:{type:Object,required:!0}},data(){return{previewFolder:this.item.injected.fileid}},computed:{...(0,o.L8)(["files","folders"]),folderContent(){return this.folders[this.item.injected.fileid]},previewFiles(){const t=this.folders[this.previewFolder],e=t?t.map((t=>this.files[t])).slice(0,4):[];if(0===e.length&&this.files[this.previewFolder].folders&&this.previewFolder===this.item.injected.fileid){const t=this.files[this.previewFolder].folders[0];this.updatePreviewFolder(t),this.folders[this.previewFolder]||this.getFolderData(this.files[this.previewFolder].filename)}return e}},async created(){this.folderContent||await this.getFolderData(this.item.injected.filename)},methods:{async getFolderData(t){try{const e=`/files/${(0,W.HW)()?.uid}`,n=t.replace(new RegExp(`^${e}`),""),{folder:i,folders:a,files:o}=await L(n,{shared:this.item.injected.showShared,signal:this.abortController.signal});this.$store.dispatch("updateFolders",{fileid:i.fileid,files:o,folders:a}),this.$store.dispatch("updateFiles",{folder:i,files:o,folders:a})}catch(e){e.response&&e.response.status&&console.error("Failed to get folder content",t,e.response)}},updatePreviewFolder(t){this.previewFolder=t}}};var q=i(15853),P={};P.styleTagTransform=y(),P.setAttributes=v(),P.insert=f().bind(null,"head"),P.domAPI=C(),P.insertStyleElement=w();g()(q.A,P);q.A&&q.A.locals&&q.A.locals;const G=(0,B.A)(U,(function(){var t=this;return(0,t._self._c)("FolderTagPreview",{attrs:{id:t.item.injected.fileid,name:t.item.injected.basename.toString(),path:t.item.injected.filename,"file-list":t.previewFiles}})}),[],!1,null,"1c155c06",null).exports;var N=i(16482),H=i(59006),R=i(85471),O=i(28356);const Y=new R.Ay({data:()=>({gridConfig:O.sizes.max}),watch:{gridConfig(t){this.$emit("changed",t)}},created(){window.addEventListener("resize",this.handleWindowResize),this.handleWindowResize()},beforeDestroy(){window.removeEventListener("resize",this.handleWindowResize)},methods:{handleWindowResize(){const t=Object.keys(O.sizes).find((t=>t>document.documentElement.clientWidth));this.gridConfig=O.sizes[t]||O.sizes.max}}}),M={data:()=>({gridConfig:{}}),created(){Y.$on("changed",(t=>{this.gridConfig=t})),console.debug("[photos]","Grid config",Object.assign({},Y.gridConfig)),this.gridConfig=Y.gridConfig},beforeDestroy(){Y.$off("changed",this.gridConfig)}};var K=i(83456);const X={name:"Folders",components:{FolderIcon:d.A,HeaderNavigation:N.A,NcEmptyContent:r.yI,NcLoadingIcon:r.ne,UploadPicker:s.SX,VirtualGrid:A.A},mixins:[I.A,M],props:{rootTitle:{type:String,required:!0},path:{type:String,default:"/"},showShared:{type:Boolean,default:!1}},data:()=>({error:null,allowedMimes:S.Ay,initializing:!0,loading:!1,appContent:document.getElementById("app-content-vue"),uploader:(0,s.$7)()}),computed:{...(0,o.L8)(["files","folders"]),folderId(){return this.$store.getters.folderId(this.path)},folder(){return this.files[this.folderId]},folderAsFolder(){return this.folder?new a.vd({...this.folder,source:decodeURI(this.folder.source),permissions:(0,a.vb)(this.folder.permissions)}):null},folderContent(){return this.folders[this.folderId]||[]},fileList(){return this.folderContent&&this.folderContent.map((t=>this.files[t])).filter((t=>!!t))},subFolders(){return this.folderId&&this.files[this.folderId]&&this.files[this.folderId].folders},folderList(){return this.subFolders&&this.subFolders.map((t=>this.files[t])).filter((t=>!!t))},contentList(){const t=this.folderList?.map((t=>({id:`folder-${t.fileid}`,injected:{...t,showShared:this.showShared},width:232,height:280,columnSpan:1,renderComponent:G}))),e=this.fileList?.map((t=>({id:`file-${t.fileid}`,injected:{...t,list:this.fileList},width:256,height:256,columnSpan:1,renderComponent:T})));return[...t||[],...e||[]]},isEmpty(){return!this.haveFiles&&!this.haveFolders},haveFiles(){return!!this.fileList&&0!==this.fileList.length},haveFolders(){return!!this.folderList&&0!==this.folderList.length}},watch:{path(){this.fetchFolderContent()},showShared(){this.fetchFolderContent()}},beforeMount(){this.fetchFolderContent()},methods:{onRefresh(){this.fetchFolderContent()},async fetchFolderContent(){this.error=null,this.loading=!0,OCA?.Viewer?.close?.(),OCA?.Files?.Sidebar?.close?.(),this.files[this.folderId]&&this.folders[this.folderId]||(this.initializing=!0);try{const{folder:t,folders:e,files:n}=await L(this.path,{shared:this.showShared,signal:this.abortController.signal});this.$store.dispatch("addPath",{path:this.path,fileid:t.fileid}),this.$store.dispatch("updateFolders",{fileid:t.fileid,files:n,folders:e}),this.$store.dispatch("updateFiles",{folder:t,files:n,folders:e})}catch(t){t.response&&t.response.status&&(404===t.response.status?(this.error=404,setTimeout((()=>{this.$router.push({name:this.$route.name})}),3e3)):this.error=t),console.error("Error fetching album data",t)}finally{this.loading=!1,this.initializing=!1}},async onUpload(t){const e=t.source.split(H.cg).pop(),n=await async function(t){const e="/"===t?"":t,n=await H.Ay.stat(H.cg+e,{data:K.A,details:!0});return(0,j.JR)(n.data)}(e);this.$store.dispatch("appendFiles",[n]),this.$store.dispatch("addFilesToFolder",{fileid:this.folderId,files:[n]})}}};var J=i(9703),Q={};Q.styleTagTransform=y(),Q.setAttributes=v(),Q.insert=f().bind(null,"head"),Q.domAPI=C(),Q.insertStyleElement=w();g()(J.A,Q);J.A&&J.A.locals&&J.A.locals;const V=(0,B.A)(X,(function(){var t=this,e=t._self._c;return 404===t.error?e("NcEmptyContent",{attrs:{name:t.t("photos","This folder does not exist")},scopedSlots:t._u([{key:"icon",fn:function(){return[e("FolderIcon")]},proxy:!0}],null,!1,1472452094)}):t.error?e("NcEmptyContent",{attrs:{name:t.t("photos","An error occurred")}}):t.initializing?e("NcEmptyContent",{attrs:{name:t.t("photos","Loading folders …")},scopedSlots:t._u([{key:"icon",fn:function(){return[e("NcLoadingIcon")]},proxy:!0}])}):t.initializing?t._e():e("div",[e("HeaderNavigation",{key:"navigation",class:{"photos-navigation--uploading":t.uploader.queue?.length>0},attrs:{loading:t.loading,path:t.path,title:t.folder?.basename?.toString?.()||t.rootTitle,"root-title":t.rootTitle},on:{refresh:t.onRefresh}},[e("UploadPicker",{attrs:{accept:t.allowedMimes,destination:t.folderAsFolder,multiple:!0},on:{uploaded:t.onUpload}})],1),t._v(" "),t.isEmpty?e("NcEmptyContent",{key:"emptycontent",attrs:{name:t.t("photos","No photos in here")},scopedSlots:t._u([{key:"icon",fn:function(){return[e("FolderIcon")]},proxy:!0}],null,!1,1472452094)}):e("div",{staticClass:"grid-container",class:{"grid-container--folders":t.haveFolders}},[e("VirtualGrid",{ref:"virtualgrid",attrs:{items:t.contentList,"scroll-element":t.appContent,"get-column-count":()=>t.haveFolders?t.gridConfig.folderCount:t.gridConfig.count,"get-grid-gap":()=>t.haveFolders?16:8}})],1)],1)}),[],!1,null,"e15d9a08",null).exports}}]);
//# sourceMappingURL=photos-src_views_Folders_vue.js.map?v=55b6c02113e4008fe788