function B(e,n,a){window.enmity.settings.set(e,n,a)}function v(e,n,a){return window.enmity.settings.get(e,n,a)}const{components:t}=window.enmity;t.Alert,t.Button,t.FlatList;const M=t.Image;t.ImageBackground,t.KeyboardAvoidingView,t.Modal,t.Pressable,t.RefreshControl;const N=t.ScrollView;t.SectionList,t.StatusBar,t.StyleSheet,t.Switch;const y=t.Text;t.TextInput,t.TouchableHighlight;const O=t.TouchableOpacity;t.TouchableWithoutFeedback,t.Touchable;const b=t.View;t.VirtualizedList,t.Form,t.FormArrow,t.FormCTA,t.FormCTAButton,t.FormCardSection,t.FormCheckbox,t.FormDivider,t.FormHint,t.FormIcon,t.FormInput,t.FormLabel,t.FormRadio;const r=t.FormRow,D=t.FormSection;t.FormSelect,t.FormSubLabel;const g=t.FormSwitch;t.FormTernaryCheckBox,t.FormText,t.FormTextColors,t.FormTextSizes;function z(e){window.enmity.plugins.registerPlugin(e)}function Y(...e){return window.enmity.modules.getByProps(...e)}function j(...e){return window.enmity.modules.getByName(...e)}window.enmity.modules.common;const p=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const o=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage;const H=window.enmity.modules.common.Toasts,S=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users;const G=window.enmity.modules.common.Navigation;window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const K=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function W(e){return window.enmity.patcher.create(e)}var s="GlobalBadges",c="1.1.4",X="Adds global badges from other client mods including CPR badges.",V=[{name:"Zyki",id:"151421969085104128"},{name:"HypedDomi",id:"354191516979429376"}],J="#69420b",F="https://zyki.net/cpr_badges/GlobalBadges.js",C=["V1.0.0: CPR badges :P","V1.0.3: Emilia badge","V1.0.7: 'The Judge' badge","V1.1.1: Badges now get fetched from an API","V1.1.2: Renamed the badges + new badge api","V1.1.4: You can now disable specific badges"],d={name:s,version:c,description:X,authors:V,color:J,rawUrl:F,changelog:C};const{native:f}=window.enmity;function Z(){f.reload()}f.version,f.build,f.device,f.version;async function $(){let e=(await(await fetch(`${F}?${Math.random()}`)).text()).match(/\d\.\d\.\d+/g);if(!(e!=null&&e.length))return!1;e=e[0].replace('"',""),e=e.split(".").map(a=>parseInt(a));const n=c.split(".").map(a=>parseInt(a));return e[0]>n[0]||e[0]==n[0]&&e[1]>n[1]?!0:e[0]==n[0]&&e[1]==n[1]&&e[2]>n[2]}const q=e=>{let n=[];fetch(e).then(a=>a.text()).then(a=>n=a.match(/\d\.\d\.\d+/g)),window.enmity.plugins.installPlugin(e,({data:a})=>{a=="installed_plugin"||a=="overridden_plugin"?S.show({title:`Updated ${s}`,body:`Successfully updated to version **${n!=null&&n.length?n[0]:c}**. Would you like to reload Discord now?`,confirmText:"Reload",cancelText:"Later",onConfirm:()=>Z()}):console.log(`[${s}] Plugin failed to update to version ${c}`)})};function L(){S.show({title:"Plugin Updater",body:`**${s}** has an update. Do you want to update now?`,confirmText:"Update",cancelText:"No",onConfirm:()=>{B(s,"_didUpdate",!0),q(`${F}?${Math.random()}`)}})}function _(){!C.length||S.show({title:`${s} - v${c}`,body:`- ${C.join(`
- `)}`,confirmText:"OK",onConfirm:()=>B(s,"_changelog",c)})}Y("transitionToGuild");var Q=({settings:e})=>{const n=K.createThemedStyleSheet({item:{color:p.ThemeColorMap.TEXT_MUTED},text_container:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap"},main_text:{opacity:.975,letterSpacing:.25},header:{color:p.ThemeColorMap.HEADER_PRIMARY,fontFamily:p.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},sub_header:{color:p.ThemeColorMap.HEADER_SECONDARY,opacity:.975,fontSize:12.75}}),[a,w]=o.useState(),[l,m]=o.useState();return o.createElement(o.Fragment,null,o.createElement(N,{onTouchStart:i=>{w(i.nativeEvent.pageX),m(i.nativeEvent.pageY)},onTouchEnd:i=>{a-i.nativeEvent.pageX<-100&&l-i.nativeEvent.pageY<40&&l-i.nativeEvent.pageY>-40&&G.pop()}},o.createElement(b,null,o.createElement(b,{style:n.text_container},o.createElement(y,{style:[n.main_text,n.header]},s),o.createElement(b,{style:{flexDirection:"row"}},o.createElement(y,{style:[n.main_text,n.sub_header]},"Author:"),o.createElement(y,{style:[n.main_text,n.sub_header,{paddingLeft:4,fontFamily:p.Fonts.DISPLAY_BOLD}]},` ${V.map(i=>i.name).join(", ")}`)),o.createElement(b,{style:{flexDirection:"row"}},o.createElement(y,{style:[n.main_text,n.sub_header]},"Version:"),o.createElement(y,{style:[n.main_text,n.sub_header,{paddingLeft:4,fontFamily:p.Fonts.DISPLAY_BOLD}]},` ${c}`)))),o.createElement(D,{title:"Badges"},o.createElement(r,{label:"CyPwn",subLabel:"Show CyPwn Badges",trailing:o.createElement(g,{value:e.getBoolean("showCyPwn",!0),onValueChange:()=>e.toggle("showCyPwn",!0)})}),o.createElement(r,{label:"Aliucord",subLabel:"Show Aliucord Badges",trailing:o.createElement(g,{value:e.getBoolean("showAliucord",!0),onValueChange:()=>e.toggle("showAliucord",!0)})}),o.createElement(r,{label:"BetterDiscord",subLabel:"Show BetterDiscord Badges",trailing:o.createElement(g,{value:e.getBoolean("showBetterDiscord",!0),onValueChange:()=>e.toggle("showBetterDiscord",!0)})}),o.createElement(r,{label:"Replugged",subLabel:"Show Replugged Badges",trailing:o.createElement(g,{value:e.getBoolean("showReplugged",!0),onValueChange:()=>e.toggle("showReplugged",!0)})}),o.createElement(r,{label:"Velocity",subLabel:"Show Velocity Badges",trailing:o.createElement(g,{value:e.getBoolean("showVelocity",!0),onValueChange:()=>e.toggle("showVelocity",!0)})}),o.createElement(r,{label:"Vencord",subLabel:"Show Vencord Badges",trailing:o.createElement(g,{value:e.getBoolean("showVencord",!0),onValueChange:()=>e.toggle("showVencord",!0)})})),o.createElement(D,{title:"Updates"},o.createElement(r,{label:"Check for Updates on startup",subLabel:"Checks automatically for updates when starting the Plugin",trailing:o.createElement(g,{value:e.getBoolean("autoUpdateCheck",!0),onValueChange:()=>e.toggle("autoUpdateCheck",!0)})}),o.createElement(r,{label:"Check for Updates",trailing:r.Arrow,onPress:()=>{$().then(i=>{i?L():S.show({title:"Plugin Updater",body:`**${s}** is already on the latest version (**${c}**)`,confirmText:"OK"})})}}),o.createElement(r,{label:"Show Changelog",subLabel:`Shows the changelog for v${c}`,trailing:r.Arrow,onPress:()=>_(),disabled:!C.length}))))};const A="https://clientmodbadges-api.herokuapp.com/",U="https://zyki.net/cpr_badges/",T=new Map,ee=1e3*60*15,te=(e,n)=>{var a,w;!T.has(e)||((a=T.get(e))==null?void 0:a.expires)<Date.now()?fetch(`${A}users/${e}`).then(l=>l.json()).then(l=>{fetch(`${U}?id=${e}`).then(m=>m.json()).then(m=>{const i={...l,...m};T.set(e,{badges:i,expires:Date.now()+ee}),n(i)})}):n((w=T.get(e))==null?void 0:w.badges)},oe=({name:e,img:n})=>{const a={wrapper:{alignItems:"center",flexDirection:"row",justifyContent:"flex-end"},image:{width:24,height:24,resizeMode:"contain",marginHorizontal:2}};return o.createElement(b,{style:a.wrapper},o.createElement(O,{onPress:()=>H.open({content:e,source:{uri:n}})},o.createElement(M,{style:a.image,source:{uri:n}})))},R=W(d.name),ne={...d,onStart(){v(d.name,"_didUpdate",!1)||(v(d.name,"autoUpdateCheck",!0)&&$().then(n=>{n&&L()}),v(d.name,"_changelog",d.version)!==d.version&&_()),B(d.name,"_didUpdate",!1);const e=j("ProfileBadges",{all:!0,default:!1});for(const n of e)R.after(n,"default",(a,[{user:{id:w}}],l)=>{const[m,i]=o.useState({});o.useEffect(()=>te(w,i),[]);const E=[];if(!m||(Object.keys(m).forEach(u=>{u.toLowerCase()==="enmity"||!v(d.name,`show${u}`,!0)||m[u].forEach(h=>{const k=u==="CyPwn"?`${U}?badge=${h}`:`${A}badges/${u}/${h.replace(u,"").trim().split(" ")[0]}`,x={hunter:"Bug Hunter",early:"Early User"};x[h]&&(h=x[h]);const P=h.replace(u,"").trim(),I=`${u} ${P.charAt(0).toUpperCase()+P.slice(1)}`;E.push(o.createElement(oe,{name:I,img:k}))})}),!E.length))return l;l.props.badges?l.props.badges.push(...E):l.props.children.push(...E)})},onStop(){R.unpatchAll()},getSettingsPanel({settings:e}){return o.createElement(Q,{settings:e})}};z(ne);