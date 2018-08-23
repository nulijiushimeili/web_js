/**
 * Created by Administrator on 2017/5/18.
 */
function limitDrag(id) {
    Drag.call(this,id);
}
for(var i in Drag.prototype)
{
    limitDrag.prototype[i]=Drag.prototype[i];
}