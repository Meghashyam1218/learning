import { c as create_ssr_component, e as escape } from "./ssr.js";
const LoginImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  return `<div class="image-container relative min-h-[100%] basis-1/3 max-sm:hidden md:basis-1/2"><img src="./login-wall.jpg" alt="login-img" class="h-[100%] object-cover saturate-50"> <h1 class="login-img-text absolute top-0 m-4 pb-4 text-5xl font-bold text-white md:text-6xl">${escape(name)}</h1></div>`;
});
export {
  LoginImage as L
};
