const calcPagesTotal = ( total, limit = 10)=> {
   return Math.ceil(total / limit)
}
export default calcPagesTotal;