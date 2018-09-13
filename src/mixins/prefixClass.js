/**
 * 辅助生成class前缀, 拼接comonent name
 * p()       => comonent
 * p('child') => comonent__child
*/

export default {
  methods: {
    p(el = '') {
      const { name } = this.$options;
      return el ? `${name}__${el}` : name;
    }
  }
}
