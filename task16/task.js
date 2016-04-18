/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */

var aqiData = { };

function addAqiData() {
  var city = document.getElementById('aqi-city-input').value.trim();
  var value = document.getElementById('aqi-value-input').value.trim();
  if(((/^[a-zA-Z\u4e00-\u9fa5\s]+$/).test(city)) && ((/^[0-9]+$/).test(value))) {
    aqiData[city] = parseInt(value);
    console.log(JSON.stringify(aqiData));
  } else {
    alert('填写错误，格式示例：\n北京 90\nShanghai 40');
}
}


/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
  var oTable = document.getElementById('aqi-table');
  oTable.innerHTML = '<tr>\
                       <td>城市</td>\
                       <td>空气质量</td>\
                       <td>操作</td>\
                      </tr>';
  
  for(var city in aqiData){
    var oTr = document.createElement('tr');
    oTr.innerHTML = '<td>' + city + '</td><td>' + aqiData[city] + '</td><button>删除</button>';

    oTr.childNodes[2].onclick = function(){delBtnHandle(this);};
    oTable.appendChild(oTr);
  }
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(ele) {
  var cityName = ele.parentNode.childNodes[0].innerText;
  console.info(cityName);
  delete aqiData[cityName];
  renderAqiList();
}

function init() {
  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    document.getElementById('add-btn').onclick = addBtnHandle;
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
}
    window.onload = init;