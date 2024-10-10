import { c as create_ssr_component, f as each, b as add_attribute, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import { L as LoginImage } from "../../../chunks/LoginImage.js";
import "clsx";
import "dequal";
import { d as derived, r as readable } from "../../../chunks/index.js";
const css$1 = {
  code: ".search-input.svelte-ox0f4{background:url(/search.svg) no-repeat scroll 10px 10px;padding-left:35px}",
  map: `{"version":3,"file":"SelectGoals.svelte","sources":["SelectGoals.svelte"],"sourcesContent":["<script>\\r\\n\\timport { fly } from 'svelte/transition';\\r\\n\\timport { crossfade } from 'svelte/transition';\\r\\n\\tlet searchQuery = '';\\r\\n\\texport let items = ['Apple', 'Banana', 'Orange', 'Grapes', 'Pineapple', 'Mango', 'Strawberry'];\\r\\n\\r\\n\\texport let selectedItems = [];\\r\\n\\tlet filteredItems = items; // Default is all items\\r\\n\\tlet timeoutId;\\r\\n\\r\\n\\t// Function to handle the search with debouncing\\r\\n\\tfunction handleSearch(event) {\\r\\n\\t\\tconst query = event.target.value;\\r\\n\\r\\n\\t\\t// Clear the previous timeout\\r\\n\\t\\tclearTimeout(timeoutId);\\r\\n\\r\\n\\t\\t// Set a new timeout for debouncing\\r\\n\\t\\ttimeoutId = setTimeout(() => {\\r\\n\\t\\t\\tsearchQuery = query;\\r\\n\\t\\t\\tupdateFilteredItems();\\r\\n\\t\\t}, 300);\\r\\n\\t}\\r\\n\\r\\n\\t// Function to update filtered items based on search query and selection\\r\\n\\tfunction updateFilteredItems() {\\r\\n\\t\\tfilteredItems = items.filter(\\r\\n\\t\\t\\t(item) =>\\r\\n\\t\\t\\t\\titem.toLowerCase().includes(searchQuery.toLowerCase()) && !selectedItems.includes(item)\\r\\n\\t\\t);\\r\\n\\t}\\r\\n\\r\\n\\tfunction isSelected(item) {\\r\\n\\t\\treturn selectedItems.includes(item);\\r\\n\\t}\\r\\n\\r\\n\\tfunction move(item, from, to) {\\r\\n\\t\\tto.push(item);\\r\\n\\t\\treturn [from.filter((i) => i !== item), to];\\r\\n\\t}\\r\\n\\r\\n\\tfunction movefilteredItems(item) {\\r\\n\\t\\t[selectedItems, filteredItems] = move(item, selectedItems, filteredItems);\\r\\n\\t\\titems = filteredItems;\\r\\n\\t\\tdocument.activeElement.blur();\\r\\n\\t}\\r\\n\\r\\n\\tfunction moveselectedItems(item) {\\r\\n\\t\\t[filteredItems, selectedItems] = move(item, filteredItems, selectedItems);\\r\\n\\t\\titems = filteredItems;\\r\\n\\t\\tdocument.activeElement.blur();\\r\\n\\t}\\r\\n<\/script>\\r\\n\\r\\n<div\\r\\n\\tin:fly={{ delay: 500, duration: 300, x: -30 }}\\r\\n\\tout:fly={{ duration: 300, x: 30 }}\\r\\n\\tclass=\\"search-container mt-2 flex flex-col\\"\\r\\n>\\r\\n\\t<label for=\\"email\\" class=\\"text-lg font-medium text-indigo-800\\"\\r\\n\\t\\t>Select Goals<span class=\\"text-red-500\\">*</span>\\r\\n\\t</label>\\r\\n\\t<input\\r\\n\\t\\tid=\\"search\\"\\r\\n\\t\\tname=\\"search\\"\\r\\n\\t\\ttype=\\"search\\"\\r\\n\\t\\tplaceholder=\\"Search your goal\\"\\r\\n\\t\\ton:input={handleSearch}\\r\\n\\t\\tclass=\\"search-input bg-url('./search.svg') my-2 rounded-lg border-[1px] border-zinc-800 bg-transparent px-4 py-2 tracking-wide outline-none focus:border-transparent focus:outline-indigo-900\\"\\r\\n\\t/>\\r\\n\\t<!-- Display selected items at the top -->\\r\\n\\t{#if selectedItems.length > 0}\\r\\n\\t\\t<h3 class=\\"m-2 mb-1 text-lg font-medium\\">Selected Goals:</h3>\\r\\n\\t\\t<div class=\\"chips-container my-2 flex flex-wrap gap-4\\">\\r\\n\\t\\t\\t{#each selectedItems as item (item)}\\r\\n\\t\\t\\t\\t<div class=\\"chip selected\\">\\r\\n\\t\\t\\t\\t\\t<label\\r\\n\\t\\t\\t\\t\\t\\tfor={item}\\r\\n\\t\\t\\t\\t\\t\\tclass=\\"checkbox-label cursor-pointer rounded-2xl border-[1px] border-indigo-700 px-3 py-1 font-medium outline-1 outline-indigo-800 focus-within:bg-slate-50 focus-within:outline hover:bg-slate-50 hover:outline focus:bg-slate-50 focus:outline\\"\\r\\n\\t\\t\\t\\t\\t\\t>{item}<span class=\\"remove ml-1\\">&times;</span><input\\r\\n\\t\\t\\t\\t\\t\\t\\ttype=\\"checkbox\\"\\r\\n\\t\\t\\t\\t\\t\\t\\tid={item}\\r\\n\\t\\t\\t\\t\\t\\t\\tname=\\"goals\\"\\r\\n\\t\\t\\t\\t\\t\\t\\tvalue={item}\\r\\n\\t\\t\\t\\t\\t\\t\\tchecked={isSelected(item)}\\r\\n\\t\\t\\t\\t\\t\\t\\ton:change={() => movefilteredItems(item)}\\r\\n\\t\\t\\t\\t\\t\\t\\tclass=\\"visually-hidden\\"\\r\\n\\t\\t\\t\\t\\t\\t/></label\\r\\n\\t\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t{/each}\\r\\n\\t\\t</div>\\r\\n\\t{/if}\\r\\n\\r\\n\\t<!-- Display filtered (unselected) items as checkboxes -->\\r\\n\\t{#if filteredItems.length > 0}\\r\\n\\t\\t<h3 class=\\"m-2 mb-1 text-lg font-medium\\">Available Goals:</h3>\\r\\n\\t\\t<div class=\\"chips-container my-2 flex flex-wrap gap-4\\">\\r\\n\\t\\t\\t{#each filteredItems as item, i ((item, i))}\\r\\n\\t\\t\\t\\t<div class=\\"chip\\">\\r\\n\\t\\t\\t\\t\\t<label\\r\\n\\t\\t\\t\\t\\t\\tfor={item}\\r\\n\\t\\t\\t\\t\\t\\tclass=\\"checkbox-label cursor-pointer rounded-2xl border-[1px] border-zinc-300 px-3 py-1 font-medium outline-1 outline-indigo-800 focus-within:bg-slate-50 focus-within:outline hover:bg-slate-50 hover:outline focus:bg-slate-50 focus:outline\\"\\r\\n\\t\\t\\t\\t\\t\\t>{item}<input\\r\\n\\t\\t\\t\\t\\t\\t\\ttype=\\"checkbox\\"\\r\\n\\t\\t\\t\\t\\t\\t\\tid={item}\\r\\n\\t\\t\\t\\t\\t\\t\\tvalue={item}\\r\\n\\t\\t\\t\\t\\t\\t\\tchecked={isSelected(item)}\\r\\n\\t\\t\\t\\t\\t\\t\\ton:change={() => moveselectedItems(item)}\\r\\n\\t\\t\\t\\t\\t\\t\\tclass=\\"visually-hidden\\"\\r\\n\\t\\t\\t\\t\\t\\t/></label\\r\\n\\t\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t{/each}\\r\\n\\t\\t</div>\\r\\n\\t{/if}\\r\\n</div>\\r\\n<p class=\\"mx-auto w-[100%] max-w-[400px]\\">\\r\\n\\tCan't find your goal ? <a\\r\\n\\t\\thref=\\"/#\\"\\r\\n\\t\\tclass=\\"font-medium text-indigo-800 underline underline-offset-2\\">Submit one here.</a\\r\\n\\t>\\r\\n</p>\\r\\n\\r\\n<style>\\r\\n\\t.search-input {\\r\\n\\t\\tbackground: url(/search.svg) no-repeat scroll 10px 10px;\\r\\n\\t\\tpadding-left: 35px;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA6HC,0BAAc,CACb,UAAU,CAAE,gBAAgB,CAAC,SAAS,CAAC,MAAM,CAAC,IAAI,CAAC,IAAI,CACvD,YAAY,CAAE,IACf"}`
};
const SelectGoals = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { items = ["Apple", "Banana", "Orange", "Grapes", "Pineapple", "Mango", "Strawberry"] } = $$props;
  let { selectedItems = [] } = $$props;
  let filteredItems = items;
  function isSelected(item) {
    return selectedItems.includes(item);
  }
  if ($$props.items === void 0 && $$bindings.items && items !== void 0) $$bindings.items(items);
  if ($$props.selectedItems === void 0 && $$bindings.selectedItems && selectedItems !== void 0) $$bindings.selectedItems(selectedItems);
  $$result.css.add(css$1);
  return `<div class="search-container mt-2 flex flex-col"><label for="email" class="text-lg font-medium text-indigo-800" data-svelte-h="svelte-ux89x2">Select Goals<span class="text-red-500">*</span></label> <input id="search" name="search" type="search" placeholder="Search your goal" class="search-input bg-url('./search.svg') my-2 rounded-lg border-[1px] border-zinc-800 bg-transparent px-4 py-2 tracking-wide outline-none focus:border-transparent focus:outline-indigo-900 svelte-ox0f4">  ${selectedItems.length > 0 ? `<h3 class="m-2 mb-1 text-lg font-medium" data-svelte-h="svelte-ukogmd">Selected Goals:</h3> <div class="chips-container my-2 flex flex-wrap gap-4">${each(selectedItems, (item) => {
    return `<div class="chip selected"><label${add_attribute("for", item, 0)} class="checkbox-label cursor-pointer rounded-2xl border-[1px] border-indigo-700 px-3 py-1 font-medium outline-1 outline-indigo-800 focus-within:bg-slate-50 focus-within:outline hover:bg-slate-50 hover:outline focus:bg-slate-50 focus:outline">${escape(item)}<span class="remove ml-1" data-svelte-h="svelte-1jgomi9">×</span><input type="checkbox"${add_attribute("id", item, 0)} name="goals"${add_attribute("value", item, 0)} ${isSelected(item) ? "checked" : ""} class="visually-hidden"></label> </div>`;
  })}</div>` : ``}  ${filteredItems.length > 0 ? `<h3 class="m-2 mb-1 text-lg font-medium" data-svelte-h="svelte-1lsmgtv">Available Goals:</h3> <div class="chips-container my-2 flex flex-wrap gap-4">${each(filteredItems, (item, i) => {
    return `<div class="chip"><label${add_attribute("for", item, 0)} class="checkbox-label cursor-pointer rounded-2xl border-[1px] border-zinc-300 px-3 py-1 font-medium outline-1 outline-indigo-800 focus-within:bg-slate-50 focus-within:outline hover:bg-slate-50 hover:outline focus:bg-slate-50 focus:outline">${escape(item)}<input type="checkbox"${add_attribute("id", item, 0)}${add_attribute("value", item, 0)} ${isSelected(item) ? "checked" : ""} class="visually-hidden"></label> </div>`;
  })}</div>` : ``}</div> <p class="mx-auto w-[100%] max-w-[400px]" data-svelte-h="svelte-1hp015l">Can&#39;t find your goal ? <a href="/#" class="font-medium text-indigo-800 underline underline-offset-2">Submit one here.</a> </p>`;
});
function styleToString(style) {
  return Object.keys(style).reduce((str, key) => {
    if (style[key] === void 0)
      return str;
    return str + `${key}:${style[key]};`;
  }, "");
}
({
  type: "hidden",
  "aria-hidden": true,
  hidden: true,
  tabIndex: -1,
  style: styleToString({
    position: "absolute",
    opacity: 0,
    "pointer-events": "none",
    margin: 0,
    transform: "translateX(-100%)"
  })
});
function lightable(value) {
  function subscribe(run) {
    run(value);
    return () => {
    };
  }
  return { subscribe };
}
const hiddenAction = (obj) => {
  return new Proxy(obj, {
    get(target, prop, receiver) {
      return Reflect.get(target, prop, receiver);
    },
    ownKeys(target) {
      return Reflect.ownKeys(target).filter((key) => key !== "action");
    }
  });
};
const isFunctionWithParams = (fn) => {
  return typeof fn === "function";
};
makeElement("empty");
function makeElement(name, args) {
  const { stores, action, returned } = {};
  const derivedStore = (() => {
    if (stores && returned) {
      return derived(stores, (values) => {
        const result = returned(values);
        if (isFunctionWithParams(result)) {
          const fn = (...args2) => {
            return hiddenAction({
              ...result(...args2),
              [`data-melt-${name}`]: "",
              action: action ?? noop
            });
          };
          fn.action = action ?? noop;
          return fn;
        }
        return hiddenAction({
          ...result,
          [`data-melt-${name}`]: "",
          action: action ?? noop
        });
      });
    } else {
      const returnedFn = returned;
      const result = returnedFn?.();
      if (isFunctionWithParams(result)) {
        const resultFn = (...args2) => {
          return hiddenAction({
            ...result(...args2),
            [`data-melt-${name}`]: "",
            action: action ?? noop
          });
        };
        resultFn.action = action ?? noop;
        return lightable(resultFn);
      }
      return lightable(hiddenAction({
        ...result,
        [`data-melt-${name}`]: "",
        action: action ?? noop
      }));
    }
  })();
  const actionFn = action ?? (() => {
  });
  actionFn.subscribe = derivedStore.subscribe;
  return actionFn;
}
function noop() {
}
function addEventListener(target, event, handler, options) {
  const events = Array.isArray(event) ? event : [event];
  events.forEach((_event) => target.addEventListener(_event, handler, options));
  return () => {
    events.forEach((_event) => target.removeEventListener(_event, handler, options));
  };
}
function omit(obj, ...keys) {
  const result = {};
  for (const key of Object.keys(obj)) {
    if (!keys.includes(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}
const kbd = {
  ALT: "Alt",
  ARROW_DOWN: "ArrowDown",
  ARROW_LEFT: "ArrowLeft",
  ARROW_RIGHT: "ArrowRight",
  ARROW_UP: "ArrowUp",
  BACKSPACE: "Backspace",
  CAPS_LOCK: "CapsLock",
  CONTROL: "Control",
  DELETE: "Delete",
  END: "End",
  ENTER: "Enter",
  ESCAPE: "Escape",
  F1: "F1",
  F10: "F10",
  F11: "F11",
  F12: "F12",
  F2: "F2",
  F3: "F3",
  F4: "F4",
  F5: "F5",
  F6: "F6",
  F7: "F7",
  F8: "F8",
  F9: "F9",
  HOME: "Home",
  META: "Meta",
  PAGE_DOWN: "PageDown",
  PAGE_UP: "PageUp",
  SHIFT: "Shift",
  SPACE: " ",
  TAB: "Tab",
  CTRL: "Control",
  ASTERISK: "*",
  A: "a",
  P: "p"
};
readable(void 0, (set) => {
  function clicked(event) {
    set(event);
    set(void 0);
  }
  const unsubscribe = addEventListener(document, "pointerup", clicked, {
    passive: false,
    capture: true
  });
  return unsubscribe;
});
readable(void 0, (set) => {
  function keydown(event) {
    if (event && event.key === kbd.ESCAPE) {
      set(event);
    }
    set(void 0);
  }
  const unsubscribe = addEventListener(document, "keydown", keydown, {
    passive: false
  });
  return unsubscribe;
});
({
  prefix: "",
  disabled: readable(false),
  required: readable(false),
  name: readable(void 0)
});
const defaults = {
  isDateDisabled: void 0,
  isDateUnavailable: void 0,
  value: void 0,
  preventDeselect: false,
  numberOfMonths: 1,
  pagedNavigation: false,
  weekStartsOn: 0,
  fixedWeeks: false,
  calendarLabel: "Event Date",
  locale: "en",
  minValue: void 0,
  maxValue: void 0,
  disabled: false,
  readonly: false,
  weekdayFormat: "narrow"
};
({
  isDateDisabled: void 0,
  isDateUnavailable: void 0,
  value: void 0,
  positioning: {
    placement: "bottom"
  },
  closeOnEscape: true,
  closeOnOutsideClick: true,
  onOutsideClick: void 0,
  preventScroll: false,
  forceVisible: false,
  locale: "en",
  granularity: void 0,
  disabled: false,
  readonly: false,
  minValue: void 0,
  maxValue: void 0,
  weekdayFormat: "narrow",
  ...omit(defaults, "isDateDisabled", "isDateUnavailable", "value", "locale", "disabled", "readonly", "minValue", "maxValue", "weekdayFormat")
});
const css = {
  code: ".form-container.svelte-19v8bgz::-webkit-scrollbar{width:7px}.form-container.svelte-19v8bgz::-webkit-scrollbar-track{background-color:#e4e4e4;border-radius:100px}.form-container.svelte-19v8bgz::-webkit-scrollbar-thumb{border-radius:100px;border:6px solid rgba(0, 0, 0, 0.18);border-left:0;border-right:0;background-color:#8070d4}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">const ngrokURL = import.meta.env.NGROK_URL;\\nimport LoginImage from \\"../../lib/components/LoginImage.svelte\\";\\nimport SelectGoals from \\"./SelectGoals.svelte\\";\\nimport ContentType from \\"./ContentType.svelte\\";\\nimport LearningModes from \\"./LearningModes.svelte\\";\\nimport Timeframes from \\"./Timeframes.svelte\\";\\nimport TimeAvailability from \\"./TimeAvailability.svelte\\";\\nlet counter = 0;\\nlet items = [\\n  \\"Introduction to Programming (Python)\\",\\n  \\"Data Structures & Algorithms\\",\\n  \\"SQL and NoSQL Databases\\",\\n  \\"System Design\\",\\n  \\"Object-Oriented Design (OOP)\\",\\n  \\"Operating Systems Concepts\\",\\n  \\"DBMS\\",\\n  \\"Version Control with Git\\",\\n  \\"HTML, CSS, & Web Development Basics\\",\\n  \\"RESTful APIs & Web Services\\",\\n  \\"Cloud Fundamentals\\",\\n  \\"Machine Learning & AI\\",\\n  \\"Microservices Architecture\\",\\n  \\"DevOps & CI/CD Pipelines\\",\\n  \\"Data Science & Analytics\\",\\n  \\"Artificial Intelligence Ethics & Applications\\",\\n  \\"Blockchain Basics\\",\\n  \\"Cybersecurity Fundamentals\\"\\n];\\nlet selectedItems = [];\\nlet contentTypes = [];\\nlet learningMode = \\"\\";\\nlet timeMode = \\"\\";\\nlet hours = \\"\\";\\nlet availableTimeValues = { weekly: [168, 140], daily: [24, 8, 10] };\\nlet timeranges = [];\\nlet name = \\"\\";\\nlet age = 0;\\nlet location = \\"\\";\\nlet yearsOfExperience = \\"\\";\\nlet currentRole = \\"\\";\\nlet totalAvailableHours = \\"\\";\\nlet timeFrame = \\"\\";\\nif (typeof window !== \\"undefined\\") {\\n  age = localStorage.getItem(\\"userAge\\") || \\"\\";\\n}\\nasync function submitGoals() {\\n  if (typeof window === \\"undefined\\") {\\n    console.error(\\"Window object is not available.\\");\\n    return;\\n  }\\n  const token = localStorage.getItem(\\"token\\");\\n  if (!token) {\\n    console.error(\\"No authorization token found\\");\\n    alert(\\"Please log in to proceed\\");\\n    window.location.href = \\"/login\\";\\n    return;\\n  }\\n  const headers = { \\"Content-Type\\": \\"application/json\\", \\"Authorization\\": `Bearer ${token}` };\\n  const apiUrl = \\"{ngrokURL}/api/goals\\";\\n  const goalPromises = selectedItems.map((goal, index) => {\\n    const timeRange = timeranges[index];\\n    if (!timeRange) {\\n      console.error(`No time range found for goal: ${goal}`);\\n      return Promise.reject(`No time range selected for goal: ${goal}`);\\n    }\\n    const payload = {\\n      goal,\\n      startDate: new Date(Date.UTC(\\n        timeRange.start.year,\\n        timeRange.start.month - 1,\\n        // Month is 0-indexed in JavaScript\\n        timeRange.start.day\\n      )) || /* @__PURE__ */ new Date(),\\n      endDate: new Date(Date.UTC(\\n        timeRange.end.year,\\n        timeRange.end.month - 1,\\n        // Month is 0-indexed in JavaScript\\n        timeRange.end.day\\n      )) || /* @__PURE__ */ new Date(),\\n      priority: 1\\n    };\\n    return fetch(apiUrl, {\\n      method: \\"POST\\",\\n      headers,\\n      body: JSON.stringify(payload)\\n    }).then((response) => response.json().then((data) => ({ status: response.status, data }))).catch((error) => {\\n      console.error(`Error submitting goal: ${goal}`, error);\\n      return { error: `Submission error for goal: ${goal}` };\\n    });\\n  });\\n  try {\\n    const results = await Promise.all(goalPromises);\\n    results.forEach((result, index) => {\\n      if (result.status === 201) {\\n        console.log(`Goal creation successful: ${selectedItems[index]}`);\\n      } else {\\n        console.error(`Goal creation failed: ${result.data?.error || result.error}`);\\n      }\\n    });\\n    alert(\\"All goals processed!\\");\\n  } catch (error) {\\n    console.error(\\"Error processing goals:\\", error);\\n    alert(\\"Error processing goals. Please try again.\\");\\n  }\\n}\\nasync function submitPreferences() {\\n  if (typeof window === \\"undefined\\") {\\n    console.error(\\"Window object is not available.\\");\\n    return;\\n  }\\n  const token = localStorage.getItem(\\"token\\");\\n  if (!token) {\\n    console.error(\\"No authorization token found\\");\\n    alert(\\"Please log in to proceed\\");\\n    window.location.href = \\"/login\\";\\n    return;\\n  }\\n  const headers = { \\"Content-Type\\": \\"application/json\\", \\"Authorization\\": `Bearer ${token}` };\\n  const apiUrl = \\"{ngrokURL}/api/preferences\\";\\n  const payload = {\\n    contentTypes,\\n    // Selected content type\\n    learningMode,\\n    // Selected learning mode\\n    skillLevel: \\"Beginner\\"\\n    // Chosen skill level (adjusted from the timeMode variable)\\n  };\\n  try {\\n    const response = await fetch(apiUrl, {\\n      method: \\"POST\\",\\n      headers,\\n      body: JSON.stringify(payload)\\n    });\\n    const data = await response.json();\\n    if (response.status === 201) {\\n      console.log(\\"Preferences created successfully:\\", data);\\n      alert(\\"Preferences created successfully\\");\\n    } else {\\n      console.error(\\"Error creating preferences:\\", data.message);\\n      alert(`Error creating preferences: ${data.message}`);\\n    }\\n  } catch (error) {\\n    console.error(\\"Error submitting preferences:\\", error);\\n    alert(\\"An error occurred while submitting preferences. Please try again.\\");\\n  }\\n}\\nasync function submitProfile() {\\n  if (typeof window === \\"undefined\\") {\\n    console.error(\\"Window object is not available.\\");\\n    return;\\n  }\\n  const token = localStorage.getItem(\\"token\\");\\n  if (!token) {\\n    console.error(\\"No authorization token found\\");\\n    alert(\\"Please log in to proceed\\");\\n    window.location.href = \\"/login\\";\\n    return;\\n  }\\n  name = localStorage.getItem(\\"username\\");\\n  age = parseInt(localStorage.getItem(\\"userAge\\"));\\n  location = localStorage.getItem(\\"userLocation\\");\\n  yearsOfExperience = localStorage.getItem(\\"userExperience\\");\\n  currentRole = localStorage.getItem(\\"userRole\\");\\n  const headers = { \\"Content-Type\\": \\"application/json\\", \\"Authorization\\": `Bearer ${token}` };\\n  const apiUrl = \\"{ngrokURL}/api/profile\\";\\n  const payload = {\\n    name,\\n    age,\\n    location,\\n    yearsOfExperience,\\n    currentRole,\\n    \\"totalAvailableHours\\": hours,\\n    \\"timeFrame\\": timeMode\\n  };\\n  try {\\n    const response = await fetch(apiUrl, {\\n      method: \\"POST\\",\\n      headers,\\n      body: JSON.stringify(payload)\\n    });\\n    const data = await response.json();\\n    if (response.status === 201) {\\n      console.log(\\"Profile created successfully:\\", data);\\n      alert(\\"Profile created successfully\\");\\n    } else {\\n      console.error(\\"Error creating Profile:\\", data.message);\\n      alert(`Error creating Profile: ${data.message}`);\\n    }\\n  } catch (error) {\\n    console.error(\\"Error submitting Profile:\\", error);\\n    alert(\\"An error occurred while submitting Profile. Please try again.\\");\\n  }\\n}\\nasync function submitForm() {\\n  try {\\n    console.log(\\"Selected Goals:\\", selectedItems);\\n    console.log(\\"Content Type:\\", contentTypes);\\n    console.log(\\"Learning Mode:\\", learningMode);\\n    console.log(\\"Hours:\\", hours);\\n    console.log(\\"Profile Data - Name:\\", name, \\"Age:\\", age, \\"Location:\\", location, \\"Years of Experience:\\", yearsOfExperience, \\"Current Role:\\", currentRole, \\"Total Available Hours:\\", totalAvailableHours, \\"Time Frame:\\", timeFrame);\\n    console.log(\\"Selected Time Ranges:\\", timeranges);\\n    await submitGoals();\\n    await submitPreferences();\\n    await submitProfile();\\n    alert(\\"Onboarding successful!\\");\\n  } catch (error) {\\n    console.error(\\"Error occurred during onboarding:\\", error);\\n    alert(\\"An error occurred. Please try again.\\");\\n  }\\n}\\n<\/script>\\r\\n\\r\\n<section class=\\"onBoarding sw-[100vw] container mx-auto flex h-[100vh] p-2 sm:p-4\\">\\r\\n    <LoginImage name=\\"On Boarding\\" />\\r\\n    <div\\r\\n        data-lenis-prevent\\r\\n        class=\\"form-container mx-auto flex w-full flex-col overflow-y-scroll bg-slate-100 px-4 sm:basis-2/3 md:basis-1/2 md:px-10\\"\\r\\n    >\\r\\n        <form\\r\\n            id=\\"form\\"\\r\\n            on:submit|preventDefault={submitForm}\\r\\n            class=\\"mx-auto mt-10 flex w-[100%] max-w-[400px] flex-col gap-4\\"\\r\\n        >\\r\\n            <div class=\\"header\\">\\r\\n                {#if counter == 0}\\r\\n                    <h2\\r\\n                        class=\\"welcome font-mono text-2xl font-semibold tracking-tight text-zinc-700 md:text-3xl\\"\\r\\n                    >\\r\\n                        Let\'s get started\\r\\n                    </h2>\\r\\n                    <h3 class=\\"welcome-text\\">Set your goals and preferences to begin.</h3>\\r\\n                {:else}\\r\\n                    <h2\\r\\n                        class=\\"welcome font-mono text-2xl font-semibold tracking-tight text-zinc-700 md:text-3xl\\"\\r\\n                    >\\r\\n                        Preferences\\r\\n                    </h2>\\r\\n                {/if}\\r\\n            </div>\\r\\n\\r\\n            <!-- Render SelectGoals, ContentType, LearningModes, etc. based on screen (counter value) -->\\r\\n            {#if counter == 0}\\r\\n                <SelectGoals bind:items bind:selectedItems />\\r\\n            {:else if counter == 1}\\r\\n                <ContentType bind:contentTypes></ContentType>\\r\\n                <LearningModes bind:learningMode></LearningModes>\\r\\n                <TimeAvailability bind:timeMode bind:hours bind:availableTimeValues bind:learningMode />\\r\\n            {:else if counter == 2}\\r\\n                <Timeframes bind:selectedItems bind:timeranges></Timeframes>\\r\\n            {/if}\\r\\n\\r\\n            <div class=\\"btns-container mb-10 flex justify-between\\">\\r\\n                <button\\r\\n                    on:click={() => {\\r\\n                        if (counter > 0) {\\r\\n                            counter--;\\r\\n                        }\\r\\n                    }}\\r\\n                    type=\\"button\\"\\r\\n                    disabled={counter === 0}\\r\\n                    class=\\"mt-4 w-full basis-1/3 rounded-lg border-r-2 bg-indigo-800 px-1 py-2 text-xl text-slate-200 disabled:bg-zinc-500\\"\\r\\n                >Back</button\\r\\n                ><button\\r\\n                    on:click={() => {\\r\\n                        if (counter == 2) submitForm();\\r\\n                        else counter++;\\r\\n                    }}\\r\\n                    type=\\"button\\"\\r\\n                    class=\\"mt-4 w-full basis-1/3 rounded-lg bg-indigo-800 px-1 py-2 text-xl text-slate-200\\"\\r\\n                >{counter == 2 ? \'Submit\' : \'Next\'}</button>\\r\\n            </div>\\r\\n        </form>\\r\\n    </div>\\r\\n</section>\\r\\n\\r\\n<style>\\r\\n    .form-container::-webkit-scrollbar {\\r\\n        width: 7px;\\r\\n    }\\r\\n\\r\\n    .form-container::-webkit-scrollbar-track {\\r\\n        background-color: #e4e4e4;\\r\\n        border-radius: 100px;\\r\\n    }\\r\\n\\r\\n    .form-container::-webkit-scrollbar-thumb {\\r\\n        border-radius: 100px;\\r\\n        border: 6px solid rgba(0, 0, 0, 0.18);\\r\\n        border-left: 0;\\r\\n        border-right: 0;\\r\\n        background-color: #8070d4;\\r\\n    }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAoRI,8BAAe,mBAAoB,CAC/B,KAAK,CAAE,GACX,CAEA,8BAAe,yBAA0B,CACrC,gBAAgB,CAAE,OAAO,CACzB,aAAa,CAAE,KACnB,CAEA,8BAAe,yBAA0B,CACrC,aAAa,CAAE,KAAK,CACpB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CACrC,WAAW,CAAE,CAAC,CACd,YAAY,CAAE,CAAC,CACf,gBAAgB,CAAE,OACtB"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let items = [
    "Introduction to Programming (Python)",
    "Data Structures & Algorithms",
    "SQL and NoSQL Databases",
    "System Design",
    "Object-Oriented Design (OOP)",
    "Operating Systems Concepts",
    "DBMS",
    "Version Control with Git",
    "HTML, CSS, & Web Development Basics",
    "RESTful APIs & Web Services",
    "Cloud Fundamentals",
    "Machine Learning & AI",
    "Microservices Architecture",
    "DevOps & CI/CD Pipelines",
    "Data Science & Analytics",
    "Artificial Intelligence Ethics & Applications",
    "Blockchain Basics",
    "Cybersecurity Fundamentals"
  ];
  let selectedItems = [];
  if (typeof window !== "undefined") {
    localStorage.getItem("userAge") || "";
  }
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<section class="onBoarding sw-[100vw] container mx-auto flex h-[100vh] p-2 sm:p-4">${validate_component(LoginImage, "LoginImage").$$render($$result, { name: "On Boarding" }, {}, {})} <div data-lenis-prevent class="form-container mx-auto flex w-full flex-col overflow-y-scroll bg-slate-100 px-4 sm:basis-2/3 md:basis-1/2 md:px-10 svelte-19v8bgz"><form id="form" class="mx-auto mt-10 flex w-[100%] max-w-[400px] flex-col gap-4"><div class="header">${`<h2 class="welcome font-mono text-2xl font-semibold tracking-tight text-zinc-700 md:text-3xl" data-svelte-h="svelte-1qm7zv9">Let&#39;s get started</h2> <h3 class="welcome-text" data-svelte-h="svelte-11cmdor">Set your goals and preferences to begin.</h3>`}</div>  ${`${validate_component(SelectGoals, "SelectGoals").$$render(
      $$result,
      { items, selectedItems },
      {
        items: ($$value) => {
          items = $$value;
          $$settled = false;
        },
        selectedItems: ($$value) => {
          selectedItems = $$value;
          $$settled = false;
        }
      },
      {}
    )}`} <div class="btns-container mb-10 flex justify-between"><button type="button" ${"disabled"} class="mt-4 w-full basis-1/3 rounded-lg border-r-2 bg-indigo-800 px-1 py-2 text-xl text-slate-200 disabled:bg-zinc-500">Back</button><button type="button" class="mt-4 w-full basis-1/3 rounded-lg bg-indigo-800 px-1 py-2 text-xl text-slate-200">${escape("Next")}</button></div></form></div> </section>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
