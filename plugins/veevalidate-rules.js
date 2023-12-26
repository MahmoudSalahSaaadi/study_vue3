import * as rules from '@vee-validate/rules';
import { configure, defineRule } from 'vee-validate';

export default defineNuxtPlugin(() => {
  configure({
    // validateOnBlur: true, // controls if `blur` events should trigger validation with `handleChange` handler
    // validateOnChange: true, // controls if `change` events should trigger validation with `handleChange` handler
    validateOnInput: true, // controls if `input` events should trigger validation with `handleChange` handler
    // validateOnModelUpdate: true, // controls if `update:modelValue` events should trigger validation with `handleChange` handler
  });

  // defineRule('required', required);
  // defineRule('email', email);
  // defineRule('min', min);
  Object.keys(rules)
    .filter(k => k !== 'default')
    .forEach((rule) => {
      defineRule(rule, rules[rule]);
    });
});
