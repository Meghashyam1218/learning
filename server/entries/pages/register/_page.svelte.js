import { c as create_ssr_component, b as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { L as LoginImage } from "../../../chunks/LoginImage.js";
const css = {
  code: "input.svelte-6isbck::-webkit-outer-spin-button,input.svelte-6isbck::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type='number'].svelte-6isbck{-moz-appearance:textfield}",
  map: `{"version":3,"file":"Age.svelte","sources":["Age.svelte"],"sourcesContent":["<script>\\r\\n\\texport let age = 18; // Initial age value\\r\\n\\r\\n\\tconst incrementAge = () => (age += 1);\\r\\n\\tconst decrementAge = () => {\\r\\n\\t\\tif (age > 0) age -= 1;\\r\\n\\t};\\r\\n<\/script>\\r\\n\\r\\n<div class=\\"input-field flex flex-col\\">\\r\\n\\t<label for=\\"age\\" class=\\"font-medium\\">Age <span class=\\"text-red-500\\">*</span></label>\\r\\n\\r\\n\\t<div class=\\"mt-2 flex gap-0 w-[100%]\\">\\r\\n\\t\\t<button\\r\\n\\t\\t\\ttype=\\"button\\"\\r\\n\\t\\t\\ton:click={decrementAge}\\r\\n\\t\\t\\tclass=\\"bg-transparent border-[1px] basis-1/5 border-zinc-800 p-2 rounded-l-lg text-indigo-800 font-medium text-xl focus:outline-indigo-900\\"\\r\\n\\t\\t\\t>-</button\\r\\n\\t\\t>\\r\\n\\r\\n\\t\\t<input\\r\\n\\t\\t\\tid=\\"age\\"\\r\\n\\t\\t\\tname=\\"age\\"\\r\\n\\t\\t\\ttype=\\"number\\"\\r\\n\\t\\t\\tbind:value={age}\\r\\n\\t\\t\\tmin=\\"0\\"\\r\\n\\t\\t\\tmax=\\"100\\"\\r\\n\\t\\t\\tplaceholder=\\"Enter your mail address\\"\\r\\n\\t\\t\\tclass=\\"outline-none py-2 text-center px-4 basis-3/5 bg-transparent border-[1px] border-y-zinc-800 focus:border-transparent focus:outline-indigo-900 tracking-wide\\"\\r\\n\\t\\t/>\\r\\n\\r\\n\\t\\t<button\\r\\n\\t\\t\\ttype=\\"button\\"\\r\\n\\t\\t\\ton:click={incrementAge}\\r\\n\\t\\t\\tclass=\\"bg-transparent border-[1px] basis-1/5 border-zinc-800 p-2 rounded-r-lg text-indigo-800 font-medium text-xl focus:outline-indigo-900\\"\\r\\n\\t\\t\\t>+</button\\r\\n\\t\\t>\\r\\n\\t</div>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n\\t/* Chrome, Safari, Edge, Opera */\\r\\n\\tinput::-webkit-outer-spin-button,\\r\\n\\tinput::-webkit-inner-spin-button {\\r\\n\\t\\t-webkit-appearance: none;\\r\\n\\t\\tmargin: 0;\\r\\n\\t}\\r\\n\\r\\n\\t/* Firefox */\\r\\n\\tinput[type='number'] {\\r\\n\\t\\t-moz-appearance: textfield;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA0CC,mBAAK,2BAA2B,CAChC,mBAAK,2BAA4B,CAChC,kBAAkB,CAAE,IAAI,CACxB,MAAM,CAAE,CACT,CAGA,KAAK,CAAC,IAAI,CAAC,QAAQ,eAAE,CACpB,eAAe,CAAE,SAClB"}`
};
const Age = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { age = 18 } = $$props;
  if ($$props.age === void 0 && $$bindings.age && age !== void 0) $$bindings.age(age);
  $$result.css.add(css);
  return `<div class="input-field flex flex-col"><label for="age" class="font-medium" data-svelte-h="svelte-15h70nf">Age <span class="text-red-500">*</span></label> <div class="mt-2 flex gap-0 w-[100%]"><button type="button" class="bg-transparent border-[1px] basis-1/5 border-zinc-800 p-2 rounded-l-lg text-indigo-800 font-medium text-xl focus:outline-indigo-900" data-svelte-h="svelte-mnf1a7">-</button> <input id="age" name="age" type="number" min="0" max="100" placeholder="Enter your mail address" class="outline-none py-2 text-center px-4 basis-3/5 bg-transparent border-[1px] border-y-zinc-800 focus:border-transparent focus:outline-indigo-900 tracking-wide svelte-6isbck"${add_attribute("value", age, 0)}> <button type="button" class="bg-transparent border-[1px] basis-1/5 border-zinc-800 p-2 rounded-r-lg text-indigo-800 font-medium text-xl focus:outline-indigo-900" data-svelte-h="svelte-ptwfv3">+</button></div> </div>`;
});
const Location = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { location = "Kolkata" } = $$props;
  if ($$props.location === void 0 && $$bindings.location && location !== void 0) $$bindings.location(location);
  return `<div class="input-field flex flex-col"><label for="location" class="font-medium" data-svelte-h="svelte-1u8q3fp">Location <span class="text-red-500">*</span></label> <select id="location" class="mt-2 rounded-lg border-[1px] border-zinc-800 bg-transparent px-4 py-2 tracking-wide outline-none focus:border-transparent focus:outline-indigo-900"><option value="Kolkata" data-svelte-h="svelte-i19qeg">Kolkata</option><option value="Bangalore" data-svelte-h="svelte-1535afs">Bangalore</option><option value="Chennai" data-svelte-h="svelte-1nf9vyi">Chennai</option><option value="Mumbai" data-svelte-h="svelte-ko9mwm">Mumbai</option><option value="Delhi" data-svelte-h="svelte-g6j0su">Delhi</option><option value="Hyderabad" data-svelte-h="svelte-gpx5em">Hyderabad</option></select></div>`;
});
const Yoe = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { experience = "<2" } = $$props;
  if ($$props.experience === void 0 && $$bindings.experience && experience !== void 0) $$bindings.experience(experience);
  return `<div class="input-field flex flex-col"><label for="experience" class="font-medium" data-svelte-h="svelte-120bioo">Years of Experience <span class="text-red-500">*</span></label> <div class="mt-2 flex gap-0 w-[100%]"><button type="button" class="bg-transparent border-[1px] basis-1/5 border-zinc-800 p-2 rounded-l-lg text-indigo-800 font-medium text-xl focus:outline-indigo-900" data-svelte-h="svelte-d9z6oa">-</button> <input id="experience" name="experience" type="text" readonly class="outline-none py-2 text-center px-4 basis-3/5 bg-transparent border-[1px] border-y-zinc-800 focus:border-transparent focus:outline-indigo-900 tracking-wide"${add_attribute("value", experience, 0)}> <button type="button" class="bg-transparent border-[1px] basis-1/5 border-zinc-800 p-2 rounded-r-lg text-indigo-800 font-medium text-xl focus:outline-indigo-900" data-svelte-h="svelte-1okc846">+</button></div></div>`;
});
const CurrentRole = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { currentRole = "Full-Stack Developer" } = $$props;
  if ($$props.currentRole === void 0 && $$bindings.currentRole && currentRole !== void 0) $$bindings.currentRole(currentRole);
  return `<div class="input-field flex flex-col"><label for="currentRole" class="font-medium" data-svelte-h="svelte-3c7bw1">Current Role <span class="text-red-500">*</span></label> <select id="currentRole" class="mt-2 rounded-lg border-[1px] border-zinc-800 bg-transparent px-4 py-2 tracking-wide outline-none focus:border-transparent focus:outline-indigo-900"><option value="Full-Stack Developer" data-svelte-h="svelte-1mf1ae">Full-Stack Developer</option><option value="Frontend Developer" data-svelte-h="svelte-5froiy">Frontend Developer</option><option value="Backend Developer" data-svelte-h="svelte-bnybv2">Backend Developer</option><option value="Mobile App Developer" data-svelte-h="svelte-32tnqu">Mobile App Developer</option><option value="Game Developer" data-svelte-h="svelte-1rfrefi">Game Developer</option><option value="Data Scientist" data-svelte-h="svelte-db2tje">Data Scientist</option><option value="Software Engineer" data-svelte-h="svelte-mhlzym">Software Engineer</option></select></div>`;
});
const Phone = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { countryCode = "+91" } = $$props;
  let { phoneNumber = "" } = $$props;
  if ($$props.countryCode === void 0 && $$bindings.countryCode && countryCode !== void 0) $$bindings.countryCode(countryCode);
  if ($$props.phoneNumber === void 0 && $$bindings.phoneNumber && phoneNumber !== void 0) $$bindings.phoneNumber(phoneNumber);
  return `<div class="input-field mt-2 flex flex-col"><label for="phone" class="font-medium" data-svelte-h="svelte-qvrytc">Phone Number <span class="text-red-500">*</span></label> <div class="flex mt-2"> <input id="countryCode" name="countryCode" type="text" placeholder="+91" class="outline-none py-2 px-4 rounded-l-lg bg-transparent border-[1px] border-zinc-800 focus:border-r-zinc-800 focus:border-transparent focus:outline-indigo-900 tracking-wide w-20 text-center"${add_attribute("value", countryCode, 0)}>  <input id="phone" name="phone" type="tel" placeholder="Enter your phone number" class="outline-none py-2 px-4 rounded-r-lg bg-transparent border-l-0 border-[1px] border-zinc-800 focus:border-transparent focus:outline-indigo-900 tracking-wide w-full"${add_attribute("value", phoneNumber, 0)}></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let age = 18;
  let username = "";
  let email = "";
  let password = "";
  let countryCode = "+91";
  let phoneNumber = "";
  let location = "Kolkata";
  let experience = "<2";
  let currentRole = "Full-Stack Developer";
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<section class="login container mx-auto flex min-h-[100vh] w-[100vw] rounded-md p-4">${validate_component(LoginImage, "LoginImage").$$render($$result, { name: "Register" }, {}, {})} <div class="form-container mx-auto flex flex-col justify-center bg-slate-100 px-4 sm:basis-2/3 md:basis-1/2 md:px-10"><form class="mx-auto mt-10 flex w-[100%] max-w-[400px] flex-col gap-4"><div class="header" data-svelte-h="svelte-bs2n27"><h2 class="welcome font-mono text-4xl font-semibold tracking-tight text-zinc-700">Welcome!</h2> <h3 class="welcome-text">Your gateway to knowledge starts here.</h3></div> <div class="input-field mt-2 flex flex-col"><label for="username" class="font-medium" data-svelte-h="svelte-1b6zelh">Username <span class="text-red-500">*</span></label> <input id="username" name="username" type="text" placeholder="Enter your username" class="mt-2 rounded-lg border-[1px] border-zinc-800 bg-transparent px-4 py-2 tracking-wide outline-none focus:border-transparent focus:outline-indigo-900"${add_attribute("value", username, 0)}></div> <div class="input-field flex flex-col"><label for="email" class="font-medium" data-svelte-h="svelte-1mct039">Email <span class="text-red-500">*</span></label> <input id="email" name="email" type="email" placeholder="Enter your email address" class="mt-2 rounded-lg border-[1px] border-zinc-800 bg-transparent px-4 py-2 tracking-wide outline-none focus:border-transparent focus:outline-indigo-900"${add_attribute("value", email, 0)}></div> <div class="input-field flex flex-col"><label for="password" class="font-medium" data-svelte-h="svelte-4iuwm9">Password <span class="text-red-500">*</span></label> <input id="password" name="password" type="password" placeholder="Enter your password" class="mt-2 rounded-lg border-[1px] border-zinc-800 bg-transparent px-4 py-2 tracking-wide outline-none focus:border-transparent focus:outline-indigo-900"${add_attribute("value", password, 0)}></div> ${validate_component(Age, "Age").$$render(
      $$result,
      { age },
      {
        age: ($$value) => {
          age = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Phone, "Phone").$$render(
      $$result,
      { countryCode, phoneNumber },
      {
        countryCode: ($$value) => {
          countryCode = $$value;
          $$settled = false;
        },
        phoneNumber: ($$value) => {
          phoneNumber = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Location, "Location").$$render(
      $$result,
      { location },
      {
        location: ($$value) => {
          location = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Yoe, "Yoe").$$render(
      $$result,
      { experience },
      {
        experience: ($$value) => {
          experience = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(CurrentRole, "CurrentRole").$$render(
      $$result,
      { currentRole },
      {
        currentRole: ($$value) => {
          currentRole = $$value;
          $$settled = false;
        }
      },
      {}
    )} <button type="submit" class="mt-4 rounded-md bg-indigo-800 px-1 py-2 text-xl text-slate-200" data-svelte-h="svelte-7xgpjv">Register</button></form> <p class="mx-auto mb-10 mt-5 w-[100%] max-w-[400px] text-center" data-svelte-h="svelte-1ckrrd6">Already have an account? <a href="/login" class="font-medium text-indigo-800 underline underline-offset-2">Login here</a></p></div></section>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
