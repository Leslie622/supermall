
export default {
  //mutations唯一的目的就是修改state中的状态
  //mutations中的每个方法尽可能完成的事件比较单一一点
  addCounter(state, oldProduct) {
    oldProduct.count += 1
  },
  addToCart(state, payload) {
    payload.count = 1
    payload.checked = false
    state.cartList.push(payload)
  }
}
