// pages/oa/oa_list.js
let WxParse = require('../../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    wx.request({
      url: global.baseurl+'common/show',
      success(res){
        let article = res.data.result.article
      }
    })
    var article = `<section data-role="outer" label="Powered by 135editor.com" style="font-family:微软雅黑;font-size:16px;">
    <section data-role="outer" label="Powered by 135editor.com" style="box-sizing: border-box;">
        <section data-role="outer" label="Powered by 135editor.com" style="box-sizing: border-box;">
            <section class="_135editor" data-tools="135编辑器" data-id="85925" style="position: relative; border: 0px none; padding: 0px; box-sizing: border-box;" data-color="rgb(128, 195, 223)" data-custom="rgb(128, 195, 223)">
                <section style="padding-left: 1em; position: static; box-sizing: border-box;">
                    <section style="width: 4em; margin-top: 1.9em; margin-bottom: -1.8em; margin-left: -1em; border-bottom: 1px solid rgb(128, 195, 223); box-sizing: border-box;"></section>
                    <section style="border-left: 1px solid rgb(128, 195, 223); height: 5em; padding-left: 10px; box-sizing: border-box;"></section>
                    <section style="padding: 25px 0px 10px; margin-top: -4em; margin-left: 1.1em; margin-right: 2.1em; box-sizing: border-box;" class="135brush">
                        <p style="text-align: center; white-space: normal;">
                            <span style="font-size: 14px;">淑女们秀慧窈窕，绅士们风度翩翩</span>
                        </p>
                        <p style="text-align: center; white-space: normal;">
                            <span style="font-size: 14px;">舞步款款，乐声动人</span>
                        </p>
                        <p style="text-align: center; white-space: normal;">
                            <span style="font-size: 14px;">当天夜晚，流光溢彩</span>
                        </p>
                        <p style="text-align: center; white-space: normal;">
                            <span style="font-size: 14px;">乐声，灯光，美食，快乐，情谊</span>
                        </p>
                        <p style="text-align: center; white-space: normal;">
                            <span style="font-size: 14px;">思源书院Zootopia舞会</span>
                        </p>
                        <p style="text-align: center; white-space: normal;">
                            <span style="font-size: 14px;">在大家的欢笑声中缓缓落下帷幕</span>
                        </p>
                        <p style="text-align: center; white-space: normal;">
                            <span style="font-size: 14px;">现在，就让我们来重温一下</span>
                        </p>
                        <p style="text-align: center; white-space: normal;">
                            <span style="font-size: 14px;">当晚的精彩画面吧</span>
                        </p>
                    </section>
                    <section style="margin-top: -4.8em; margin-bottom: 1em; box-sizing: border-box;">
                        <section style="height: 5em; margin-top: 1.9em; margin-bottom: -1.8em; margin-left: -1em; border-right: 1px solid rgb(128, 195, 223); box-sizing: border-box;"></section>
                        <section style="width: 4em; border-bottom: 1px solid rgb(128, 195, 223); float: right; box-sizing: border-box;"></section>
                    </section>
                </section>
            </section>
            <section class="_135editor" data-tools="135编辑器" data-id="88176" style="font-family: 微软雅黑; font-size: 16px; position: relative; border: 0px none; padding: 0px; box-sizing: border-box;" data-color="rgb(30, 155, 232)" data-custom="rgb(30, 155, 232)">
                <section style="margin-top: 10px; margin-bottom: 10px; text-align: center; position: static; box-sizing: border-box;">
                    <section style="display: inline-block; height: 32px; width: 10px; vertical-align: top; border-right: 10px solid rgb(30, 155, 232); border-top: 15px solid transparent !important; border-bottom: 15px solid transparent !important; box-sizing: border-box;"></section>
                    <section style="display: inline-block; height: 32px; width: 10px; vertical-align: top; border-right: 10px solid rgb(254, 254, 254); margin-left: -8px; border-top: 15px solid transparent !important; border-bottom: 15px solid transparent !important; box-sizing: border-box;"></section>
                    <section style="display: inline-block; height: 32px; width: 10px; vertical-align: top; border-right: 10px solid rgb(30, 155, 232); border-top: 15px solid transparent !important; border-bottom: 15px solid transparent !important; box-sizing: border-box;"></section>
                    <section class="135brush" data-brushtype="text" style="display: inline-block; vertical-align: top; height: 32px; line-height: 32px; padding: 0px 0.5em; color: rgb(255, 255, 255); background-color: rgb(30, 155, 232); box-sizing: border-box;">
                        高大上的布置
                    </section>
                    <section style="display: inline-block; height: 32px; width: 10px; vertical-align: top; border-left: 10px solid rgb(30, 155, 232); border-top: 15px solid transparent !important; border-bottom: 15px solid transparent !important; box-sizing: border-box;"></section>
                    <section style="display: inline-block; height: 32px; width: 10px; vertical-align: top; border-left: 10px solid rgb(30, 155, 232); margin-left: 2px; border-top: 15px solid transparent !important; border-bottom: 15px solid transparent !important; box-sizing: border-box;"></section>
                    <section style="display: inline-block; height: 32px; width: 10px; vertical-align: top; border-left: 10px solid rgb(254, 254, 254); margin-left: -12px; border-top: 15px solid transparent !important; border-bottom: 15px solid transparent !important; box-sizing: border-box;"></section>
                </section>
            </section>
            <section data-role="paragraph" class="_135editor" style="border: 0px none; padding: 0px; box-sizing: border-box;">
                <p style="white-space: normal;">
                    <br/>
                </p>
            </section>
            <section class="_135editor" data-tools="135编辑器" data-id="36002" style="font-family: 微软雅黑; font-size: 16px; border: 0px none; padding: 0px; position: relative; box-sizing: border-box;">
                <section style="border: 0px rgb(33, 33, 34); box-sizing: border-box; width: auto; clear: both; margin: 0px; padding: 0px 0.5em 0.5em 0px;">
                    <p style="white-space: normal;">
                        <img src="http://image.135editor.com/files/users/149/1493176/201612/xmst4ANK_3Ppq.jpg" title="undefined" alt=""/>
                    </p>
                </section>
            </section>
            <p style="font-family: 微软雅黑; font-size: 16px; text-align: center; white-space: normal;">
                <span style="color: #666666; font-size: 14px; text-align: justify; font-family: 微软雅黑;">工作人员早早地把现场布置妥当</span>
            </p>
            <p style="font-family: 微软雅黑; font-size: 16px; text-align: center; white-space: normal;">
                <span style="color: #666666; font-size: 14px; text-align: justify; font-family: 微软雅黑;">这气势有没有把大家吓了一跳~</span>
            </p>
            <p style="font-family: 微软雅黑; font-size: 16px; white-space: normal;">
                <img src="http://image.135editor.com/files/users/149/1493176/201612/hP65FbMD_kdHs.jpg"/>
            </p>
            <p style="font-family: 微软雅黑; font-size: 16px; text-align: center; white-space: normal;">
                <span style="color: #666666; font-size: 14px; text-align: justify; font-family: 微软雅黑;">随着夜幕降临<br/></span>
            </p>
            <p style="font-family: 微软雅黑; font-size: 16px; text-align: center; white-space: normal;">
                <span style="color: #666666; font-size: 14px; text-align: justify; font-family: 微软雅黑;">舞会渐渐褪下白天时朴素的衣裳</span>
            </p>
            <p style="font-family: 微软雅黑; font-size: 16px; text-align: center; white-space: normal;">
                <span style="color: #666666; font-size: 14px; text-align: justify; font-family: 微软雅黑;">显露出属于它的光芒</span>
            </p>
            <section class="_135editor" data-tools="135编辑器" data-id="86138" style="font-family: 微软雅黑; font-size: 16px; position: relative; border: 0px none; padding: 0px; box-sizing: border-box;">
                <section style="margin: 5px auto; text-align: center; box-sizing: border-box;">
                    <section style="width: 50%; display: inline-block; vertical-align: top; box-sizing: border-box;" data-width="50%">
                        <img src="http://image.135editor.com/files/users/149/1493176/201612/TX4awtNR_d3s7.jpg" style="width: 100%; margin: 0px; height: auto !important;" width="100%" height="auto" border="0" opacity="" mapurl="" title="undefined" alt="" data-width="100%"/>
                        <section style="margin: 5px; box-sizing: border-box;" class="135brush">
                            <br/>
                        </section>
                    </section>
                    <section style="display: inline-block; width: 50%; margin-top: 5em; box-sizing: border-box;" data-width="50%">
                        <p style="white-space: normal;">
                            <img src="http://image.135editor.com/files/users/149/1493176/201612/IyhgTY3A_U9yR.jpg" style="width: 100%; margin: 0px; height: auto !important;" width="100%" height="auto" border="0" opacity="" mapurl="" title="undefined" alt="" data-width="100%"/>
                        </p>
                    </section>
                </section>
            </section>
            <p style="font-family: 微软雅黑; font-size: 16px; text-align: center; white-space: normal;">
                <span style="color: #666666; font-size: 14px; text-align: justify; font-family: 微软雅黑;">高脚杯与其他器皿也准备妥当</span>
            </p>
            <p style="font-family: 微软雅黑; font-size: 16px; text-align: center; white-space: normal;">
                <span style="color: #666666; font-size: 14px; text-align: justify; font-family: 微软雅黑;">静候来宾享受这饕餮盛宴</span>
            </p>
            <p style="font-family: 微软雅黑; font-size: 16px; white-space: normal;">
                <br/>
            </p>
            <section class="_135editor" data-tools="135编辑器" data-id="88176" data-color="rgb(30, 155, 232)" data-custom="rgb(30, 155, 232)" style="font-family: 微软雅黑; font-size: 16px; position: relative; border: 0px none; padding: 0px; box-sizing: border-box;">
                <section style="margin-top: 10px; margin-bottom: 10px; text-align: center; position: static; box-sizing: border-box;">
                    <section style="display: inline-block; height: 32px; width: 10px; vertical-align: top; border-right: 10px solid rgb(30, 155, 232); border-top: 15px solid transparent !important; border-bottom: 15px solid transparent !important; box-sizing: border-box;"></section>
                    <section style="display: inline-block; height: 32px; width: 10px; vertical-align: top; border-right: 10px solid rgb(254, 254, 254); margin-left: -8px; border-top: 15px solid transparent !important; border-bottom: 15px solid transparent !important; box-sizing: border-box;"></section>
                    <section style="display: inline-block; height: 32px; width: 10px; vertical-align: top; border-right: 10px solid rgb(30, 155, 232); border-top: 15px solid transparent !important; border-bottom: 15px solid transparent !important; box-sizing: border-box;"></section>
                    <section class="135brush" data-brushtype="text" style="display: inline-block; vertical-align: top; height: 32px; line-height: 32px; padding-right: 0.5em; padding-left: 0.5em; color: rgb(255, 255, 255); background-color: rgb(30, 155, 232); box-sizing: border-box;">
                        精彩绝伦的表演
                    </section>
                    <section style="display: inline-block; height: 32px; width: 10px; vertical-align: top; border-left: 10px solid rgb(30, 155, 232); border-top: 15px solid transparent !important; border-bottom: 15px solid transparent !important; box-sizing: border-box;"></section>
                    <section style="display: inline-block; height: 32px; width: 10px; vertical-align: top; border-left: 10px solid rgb(30, 155, 232); margin-left: 2px; border-top: 15px solid transparent !important; border-bottom: 15px solid transparent !important; box-sizing: border-box;"></section>
                    <section style="display: inline-block; height: 32px; width: 10px; vertical-align: top; border-left: 10px solid rgb(254, 254, 254); margin-left: -12px; border-top: 15px solid transparent !important; border-bottom: 15px solid transparent !important; box-sizing: border-box;"></section>
                </section>
            </section>
            <p style="font-family: 微软雅黑; font-size: 16px; text-align: center; white-space: normal;">
                <span style="color: #666666; font-size: 14px; text-align: justify; font-family: 微软雅黑;">首先是合唱团三位嘉宾为我们带来的精彩演唱</span>
            </p>
            <p style="font-family: 微软雅黑; font-size: 16px; white-space: normal;">
                <img src="http://image.135editor.com/files/users/149/1493176/201612/QOu4wJjW_z9ru.jpg"/>
            </p>
            <p style="font-family: 微软雅黑; font-size: 16px; text-align: center; white-space: normal;">
                <span style="color: #666666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 14px; text-align: justify;">一图胜千言</span>
            </p>
            <p style="font-family: 微软雅黑; font-size: 16px; text-align: center; white-space: normal;">
                <span style="color: #666666; font-size: 14px; text-align: justify; font-family: 微软雅黑;">看到他们如此投入的表情</span>
            </p>
            <p style="font-family: 微软雅黑; font-size: 16px; text-align: center; white-space: normal;">
                <span style="color: #666666; font-size: 14px; text-align: justify; font-family: 微软雅黑;">就知道有多好听啦</span>
            </p>
            <p style="font-family: 微软雅黑; font-size: 16px; text-align: center; white-space: normal;">
                <span style="color: #666666; font-size: 14px; text-align: justify; font-family: 微软雅黑;">耳朵真的会怀孕呢^^</span>
            </p>
            <section class="_135editor" data-tools="135编辑器" data-id="701" style="font-family: 微软雅黑; font-size: 16px; border: 0px none; padding: 0px; box-sizing: border-box;">
                <section style="text-align: center; box-sizing: border-box;">
                    <section style="display: inline-block; width: 100%; box-sizing: border-box;">
                        <img data-id="701" data-role="guide-img" style="max-width: 100%; width: 100%; display: inline;" title="银色金属分割线" src="http://image3.135editor.com/cache/remote/aHR0cHM6Ly9tbWJpei5xbG9nby5jbi9tbWJpei9jWlYyaFJwdUFQZ3lHUmh5b3FiVHVwTjdsTTJOU1ZKcWthRlF6QTU5RjZraWJsSVFzTDE3NWx4SVZaYlNMckZERmljaWJ4WGlhWHBYbUFHa3JHTlNpYjc2WWx3LzA="/>
                    </section>
                </section>
            </section>
            <p style="font-family: 微软雅黑; font-size: 16px; text-align: center; white-space: normal;">
                <span style="color: #666666; font-size: 14px; text-align: justify; font-family: 微软雅黑;">与此同时</span>
            </p>
            <p style="font-family: 微软雅黑; font-size: 16px; text-align: center; white-space: normal;">
                <span style="color: #666666; font-size: 14px; text-align: justify; font-family: 微软雅黑;">现场的气氛也越来越火热</span>
            </p>
            <p style="font-family: 微软雅黑; font-size: 16px; text-align: center; white-space: normal;">
                <span style="color: #666666; font-size: 14px; text-align: justify; font-family: 微软雅黑;">国标舞协会的表演嘉宾</span>
            </p>
            <p style="font-family: 微软雅黑; font-size: 16px; text-align: center; white-space: normal;">
                <span style="color: #666666; font-size: 14px; text-align: justify; font-family: 微软雅黑;">在大家的欢呼声中上台</span><br/>
            </p>
            <section class="_135editor" data-tools="135编辑器" data-id="86380" style="font-family: 微软雅黑; font-size: 16px; position: relative; border: 0px none; padding: 0px; box-sizing: border-box;">
                <section style="margin-top: 0.5em; margin-bottom: 0.5em; text-align: center; padding-left: 0.8em; padding-right: 0.8em; position: static; box-sizing: border-box;">
                    <section style="width: 100%; text-align: left; box-sizing: border-box;" data-width="100%">
                        <img class="assistant" style="width:4.2em; vertical-align: middle; margin: 0px 0px 0px -16px;" src="http://image3.135editor.com/cache/remote/aHR0cHM6Ly9tbWJpei5xbG9nby5jbi9tbWJpei9jWlYyaFJwdUFQaWF2Vlg5MmJpYTg2UDZZNWNZd1FjWVlrU0Y1MjRPNDh3V1FXMXhoWEQ0QUxyWGJvZnNqVmdYdDhEcUhVbEFFTm83NDZxbEFkSURRZVpnLzA="/>
                    </section>
                    <section style="box-shadow: rgba(140, 140, 140, 0.498039) 0px 0px 10px; width: 100%; padding: 8px; float: left; margin-top: -2.6em; margin-bottom: -2.6em; background-color: rgb(254, 255, 255); box-sizing: border-box;" data-width="100%">
                        <section style="padding: 10px; box-sizing: border-box;">
                            <img src="http://image.135editor.com/files/users/149/1493176/201612/7t6rBGdt_PELd.jpg" title="undefined" alt=""/>
                        </section>
                    </section>
                    <section class="assistant" style="width: 100%; text-align: right; box-sizing: border-box;" data-width="100%">
                        <img style="width:4.2em; text-align: start; vertical-align: middle; margin: 0px -16px 0px 0px;" src="http://image3.135editor.com/cache/remote/aHR0cHM6Ly9tbWJpei5xbG9nby5jbi9tbWJpei9jWlYyaFJwdUFQaWF2Vlg5MmJpYTg2UDZZNWNZd1FjWVlrU09NTFRJcVA4c2E3QnVzUXlhaWNmbEQ0cm1jZWlidzJIajJoQ2ljSm1qZ05idDNKSjUwaWE4YndsZy8w"/>
                    </section>
                </section>
            </section>
            <p style="font-family: 微软雅黑; font-size: 16px; text-align: center; white-space: normal;">
                <span style="color: #666666; font-size: 14px; text-align: justify; font-family: 微软雅黑;">动作流畅，典雅大方</span>
            </p>
            <p style="font-family: 微软雅黑; font-size: 16px; text-align: center; white-space: normal;">
                <span style="color: #666666; font-size: 14px; text-align: justify; font-family: 微软雅黑;">华尔兹舞步如行云流水</span>
            </p>
            <p style="font-family: 微软雅黑; font-size: 16px; text-align: center; white-space: normal;">
                <span style="color: #666666; font-size: 14px; text-align: justify; font-family: 微软雅黑;">配着舒扬的华尔兹舞曲</span>
            </p>
            <p style="font-family: 微软雅黑; font-size: 16px; text-align: center; white-space: normal;">
                <span style="color: #666666; font-size: 14px; text-align: justify; font-family: 微软雅黑;">一步一步走向你</span>
            </p>
            <section class="_135editor" data-tools="135编辑器" data-id="3047" style="font-family: 微软雅黑; font-size: 16px; border: 0px none; padding: 0px; box-sizing: border-box;">
                <section style="border: 0px; box-sizing: border-box; width: auto; clear: both; margin: 0px; padding: 0px 0.5em 0.5em 0px;">
                    <section class="_135editor" data-tools="135编辑器" data-id="86380" style="border: 0px none; padding: 0px; position: relative; box-sizing: border-box;">
                        <section style="margin-top: 0.5em; margin-bottom: 0.5em; text-align: center; padding-left: 0.8em; padding-right: 0.8em; position: static; box-sizing: border-box;">
                            <section style="width: 100%; text-align: left; box-sizing: border-box;" data-width="100%">
                                <img class="assistant" style="width:4.2em; vertical-align: middle; margin: 0px 0px 0px -16px;" src="http://image3.135editor.com/cache/remote/aHR0cHM6Ly9tbWJpei5xbG9nby5jbi9tbWJpei9jWlYyaFJwdUFQaWF2Vlg5MmJpYTg2UDZZNWNZd1FjWVlrU0Y1MjRPNDh3V1FXMXhoWEQ0QUxyWGJvZnNqVmdYdDhEcUhVbEFFTm83NDZxbEFkSURRZVpnLzA="/>
                            </section>
                            <section style="box-shadow: rgba(140, 140, 140, 0.498039) 0px 0px 10px; width: 100%; padding: 8px; float: left; margin-top: -2.6em; margin-bottom: -2.6em; background-color: rgb(254, 255, 255); box-sizing: border-box;" data-width="100%">
                                <section style="padding: 10px; box-sizing: border-box;">
                                    <img src="http://image.135editor.com/files/users/115/1155380/201612/wNZtKSNu_3M3M.jpg" title="undefined" alt=""/>
                                </section>
                            </section>
                            <section class="assistant" style="width: 100%; text-align: right; box-sizing: border-box;" data-width="100%">
                                <img style="width:4.2em; text-align: start; vertical-align: middle; margin: 0px -16px 0px 0px;" src="http://image3.135editor.com/cache/remote/aHR0cHM6Ly9tbWJpei5xbG9nby5jbi9tbWJpei9jWlYyaFJwdUFQaWF2Vlg5MmJpYTg2UDZZNWNZd1FjWVlrU09NTFRJcVA4c2E3QnVzUXlhaWNmbEQ0cm1jZWlidzJIajJoQ2ljSm1qZ05idDNKSjUwaWE4YndsZy8w"/>
                            </section>
                        </section>
                    </section>
                    <section data-role="paragraph" class="_135editor" style="border: 0px none; padding: 0px; box-sizing: border-box;">
                        <p style="white-space: normal;">
                            <br/>
                        </p>
                    </section>
                </section>
            </section>
            <p style="font-family: 微软雅黑; font-size: 16px; text-align: center; white-space: normal;">
                <span style="color: #666666; font-size: 14px; text-align: justify; font-family: 微软雅黑;">台下的气氛<br/></span>
            </p>
            <p style="font-family: 微软雅黑; font-size: 16px; text-align: center; white-space: normal;">
                <span style="color: #666666; font-size: 14px; text-align: justify; font-family: 微软雅黑;">也在两位舞王的带领下到达最高峰</span>
            </p>
            <p style="font-family: 微软雅黑; font-size: 16px; text-align: center; white-space: normal;">
                <span style="color: #666666; font-size: 14px; text-align: justify; font-family: 微软雅黑;">大家已经迫不及待</span>
            </p>
            <p style="font-family: 微软雅黑; font-size: 16px; text-align: center; white-space: normal;">
                <span style="color: #666666; font-size: 14px; text-align: justify; font-family: 微软雅黑;">想要一展自己优美的舞姿</span>
            </p>
            <section class="_135editor" data-tools="135编辑器" data-id="86013" style="position: relative; border: 0px none; padding: 0px; box-sizing: border-box;">
                <section style="margin: 0px 5px; border: 5px solid rgb(255, 255, 255); box-shadow: rgb(230, 230, 220) 1px 1px 5px 1px; border-radius: 2%; box-sizing: border-box; background-color: rgba(255, 255, 255, 0.6);">
                    <p style="font-family: 微软雅黑; font-size: 16px; white-space: normal;">
                        <br/>
                    </p>
                    <section data-id="3047" class="_135editor" style="border: 0px none; padding: 0px; box-sizing: border-box;">
                        <section style="border: 0px; box-sizing: border-box; width: auto; clear: both; margin: 0px; padding: 0px 0.5em 0.5em 0px;">
                            <img src="http://image.135editor.com/files/users/115/1155380/201612/tyYwcGwc_KhPa.jpg" style="box-shadow: rgb(102, 102, 102) 0.2em 0.2em 0.5em; box-sizing: border-box; margin: 0px; height: auto !important; visibility: visible !important; width: 100%;" width="100%" height="auto" border="0" opacity="" mapurl="" title="" alt="" data-width="100%"/>
                        </section>
                    </section>
                    <p style="font-family: 微软雅黑; font-size: 16px; line-height: 24px; text-align: center; white-space: normal;">
                        <span style="font-size:14px;font-family:&#39;微软雅黑&#39;,sans-serif;color:#666666">摆好姿势</span>
                    </p>
                    <p style="font-family: 微软雅黑; font-size: 16px; line-height: 24px; text-align: center; white-space: normal;">
                        <span style="font-size:14px;font-family:&#39;微软雅黑&#39;,sans-serif;color:#666666">大家开始认真学习动作要领</span>
                    </p>
                    <p style="font-family: 微软雅黑; font-size: 16px; line-height: 24px; white-space: normal;">
                        <br/>
                    </p>
                    <section data-id="3047" class="_135editor" style="border: 0px none; padding: 0px; box-sizing: border-box;">
                        <p style="border: 0px; box-sizing: border-box; width: auto; clear: both; margin: 0px; padding: 0px 0.5em 0.5em 0px; white-space: normal;">
                            <img src="http://image.135editor.com/files/users/115/1155380/201612/et8wDmP5_df8h.jpg" style="box-shadow: rgb(102, 102, 102) 0.2em 0.2em 0.5em; box-sizing: border-box; margin: 0px; height: auto !important; visibility: visible !important; width: 100%;" width="100%" height="auto" border="0" opacity="" mapurl="" title="" alt="" data-width="100%"/>
                        </p>
                        <p style="border: 0px; box-sizing: border-box; width: auto; clear: both; margin: 0px; padding: 0px 0.5em 0.5em 0px; text-align: center; white-space: normal;">
                            <span style="font-size:14px;font-family:&#39;微软雅黑&#39;,sans-serif;color:#666666">短暂学习后</span>
                        </p>
                        <p style="border: 0px; box-sizing: border-box; width: auto; clear: both; margin: 0px; padding: 0px 0.5em 0.5em 0px; text-align: center; white-space: normal;">
                            <span style="font-size:14px;font-family:&#39;微软雅黑&#39;,sans-serif;color:#666666">已经开始跳的像模像样了</span>
                        </p>
                    </section>
                    <section style="padding: 20px 10px; border-width: 5px 0px 0px; border-style: solid none none; border-left-color: rgb(219, 219, 219); border-top-color: rgb(255, 255, 255); border-bottom-left-radius: 2%; border-bottom-right-radius: 2%; box-sizing: border-box;" class="135brush">
                        <section class="_135editor" data-tools="135编辑器" data-id="3047" style="font-family: 微软雅黑; white-space: normal; border: 0px none; padding: 0px; box-sizing: border-box;">
                            <section style="padding-right: 0.5em; padding-bottom: 0.5em; border: 0px; width: auto; clear: both; box-sizing: border-box;">
                                <section data-id="3047" class="_135editor" style="border: 0px none; padding: 0px; box-sizing: border-box;">
                                    <section style="border: 0px; box-sizing: border-box; width: auto; clear: both; margin: 0px; padding: 0px 0.5em 0.5em 0px;">
                                        <img src="http://image.135editor.com/files/users/115/1155380/201612/8dE2SyCq_3CmZ.jpg" style="box-shadow: rgb(102, 102, 102) 0.2em 0.2em 0.5em; box-sizing: border-box; margin: 0px; height: auto !important; visibility: visible !important; width: 100%;" width="100%" height="auto" border="0" opacity="" mapurl="" title="" alt="" data-width="100%"/>
                                    </section>
                                </section>
                            </section>
                        </section>
                        <p style="white-space: normal; font-family: 微软雅黑; text-align: center;">
                            <span style="color: #666666; text-align: justify; font-size: 14px;">老师在耐心地纠正大家的动作</span>
                        </p>
                        <p style="white-space: normal; font-family: 微软雅黑;">
                            <br/>
                        </p>
                        <section data-role="paragraph" class="_135editor" style="font-family: 微软雅黑; white-space: normal; border: 0px none; padding: 0px; box-sizing: border-box;">
                            <section class="_135editor" data-tools="135编辑器" data-id="3047" style="border: 0px none; padding: 0px; box-sizing: border-box;">
                                <section class="_135editor" data-tools="135编辑器" data-id="3047" style="border: 0px none; padding: 0px; box-sizing: border-box;">
                                    <section style="padding-right: 0.5em; padding-bottom: 0.5em; border: 0px; width: auto; clear: both; box-sizing: border-box;">
                                        <img src="http://image.135editor.com/files/users/115/1155380/201612/D8r3EfTV_aEzJ.jpg" width="100%" height="auto" border="0" opacity="" mapurl="" title="" alt="" data-width="100%" style="box-shadow: rgb(102, 102, 102) 0.2em 0.2em 0.5em; width: 100%; visibility: visible !important;"/>
                                    </section>
                                </section>
                            </section>
                        </section>
                        <section data-role="paragraph" class="_135editor" style="font-family: 微软雅黑; white-space: normal; border: 0px none; padding: 0px; box-sizing: border-box;">
                            <p style="white-space: normal; text-align: center;">
                                <span style="color: #666666; text-align: justify; font-size: 14px;">两眼对望</span>
                            </p>
                            <p style="white-space: normal; text-align: center;">
                                <span style="color: #666666; text-align: justify; font-size: 14px;">仿佛世界只有他们两人</span>
                            </p>
                            <p style="white-space: normal; text-align: center;">
                                <span style="color: #666666; text-align: justify; font-size: 14px;">这一刻</span>
                            </p>
                            <p style="white-space: normal; text-align: center;">
                                <span style="color: #666666; text-align: justify; font-size: 14px;">他们就是唯一</span>
                            </p>
                        </section>
                    </section>
                </section>
            </section>
            <section class="_135editor" data-tools="135编辑器" data-id="86138" style="font-family: 微软雅黑; font-size: 16px; position: relative; border: 0px none; padding: 0px; box-sizing: border-box;" data-color="rgb(117, 117, 118)" data-custom="rgb(117, 117, 118)">
                <section style="margin: 5px auto; text-align: center; box-sizing: border-box;"></section>
            </section>
            <section class="_135editor" data-tools="135编辑器" data-id="701" style="font-family: 微软雅黑; font-size: 16px; border: 0px none; padding: 0px; box-sizing: border-box;">
                <section style="text-align: center; box-sizing: border-box;">
                    <section style="display: inline-block; width: 100%; box-sizing: border-box;">
                        <img data-id="701" data-role="guide-img" style="max-width: 100%; width: 100%; display: inline;" title="银色金属分割线" src="http://image3.135editor.com/cache/remote/aHR0cHM6Ly9tbWJpei5xbG9nby5jbi9tbWJpei9jWlYyaFJwdUFQZ3lHUmh5b3FiVHVwTjdsTTJOU1ZKcWthRlF6QTU5RjZraWJsSVFzTDE3NWx4SVZaYlNMckZERmljaWJ4WGlhWHBYbUFHa3JHTlNpYjc2WWx3LzA="/>
                    </section>
                </section>
            </section>
            <p style="font-family: 微软雅黑; font-size: 16px; text-align: center; white-space: normal;">
                <span style="color: #666666; font-size: 14px; text-align: justify; font-family: 微软雅黑;">在夜幕下</span>
            </p>
            <p style="font-family: 微软雅黑; font-size: 16px; text-align: center; white-space: normal;">
                <span style="color: #666666; font-size: 14px; text-align: justify; font-family: 微软雅黑;">大家在悠扬的华尔兹翩翩起舞</span>
            </p>
            <p style="font-family: 微软雅黑; font-size: 16px; text-align: center; white-space: normal;">
                <span style="color: #666666; font-size: 14px; text-align: justify; font-family: 微软雅黑;">挥洒着自己的汗水与热情</span>
            </p>
            <p style="font-family: 微软雅黑; font-size: 16px; text-align: center; white-space: normal;">
                <span style="color: #666666; font-size: 14px; text-align: justify; font-family: 微软雅黑;">不知不觉</span>
            </p>
            <p style="font-family: 微软雅黑; font-size: 16px; text-align: center; white-space: normal;">
                <span style="color: #666666; font-size: 14px; text-align: justify; font-family: 微软雅黑;">大家的肚子唱起了“空城计”<br/></span>
            </p>
            <p style="font-family: 微软雅黑; font-size: 16px; text-align: center; white-space: normal;">
                <span style="color: #666666; font-size: 14px; text-align: justify; font-family: 微软雅黑;">不用担心</span>
            </p>
            <p style="font-family: 微软雅黑; font-size: 16px; text-align: center; white-space: normal;">
                <span style="color: #666666; font-size: 14px; text-align: justify; font-family: 微软雅黑;">我们早已为来宾准备了美味的食物</span>
            </p>
            <section class="_135editor" data-tools="135编辑器" data-id="9579" style="font-family: 微软雅黑; font-size: 16px; border: 0px none; padding: 0px; box-sizing: border-box; position: relative;">
                <section class="_135editor" data-tools="135编辑器" data-id="85556" style="position: relative; border: 0px none; padding: 0px; box-sizing: border-box;">
                    <section style="margin: 5px 0px 10px; line-height: 24px; color: rgb(70, 70, 72); border-color: rgb(198, 198, 199); box-sizing: border-box;">
                        <section style="margin: 0px; padding: 10px 0px 8px; color: inherit; border: 1px solid rgb(198, 198, 199); box-shadow: rgb(198, 198, 198) 0px 0px 5px; box-sizing: border-box;">
                            <p style="color: inherit; text-align: center; padding: 0px 10px; border-color: rgb(198, 198, 199); white-space: normal;">
                                <img alt="" border="0" data-width="100%" opacity="" src="http://image.135editor.com/files/users/149/1493176/201612/FnuhdhDz_GbNP.jpg" style="border-color: rgb(198, 198, 199); color: inherit; width: 100%; margin: 0px;" title="" vspace="0" width="100%" height="" mapurl=""/>
                            </p>
                        </section>
                        <section style="margin-top: -16px; box-sizing: border-box; border-color: rgb(198, 198, 199); margin-bottom: 18px; color: inherit;">
                            <br/>
                        </section>
                    </section>
                </section>
                <section class="_135editor" data-tools="135编辑器" data-id="85556" style="position: relative; border: 0px none; padding: 0px; box-sizing: border-box;">
                    <section style="margin: 5px 0px 10px; line-height: 24px; color: rgb(70, 70, 72); border-color: rgb(198, 198, 199); box-sizing: border-box;">
                        <section style="margin: 0px; padding: 10px 0px 8px; color: inherit; border: 1px solid rgb(198, 198, 199); box-shadow: rgb(198, 198, 198) 0px 0px 5px; box-sizing: border-box;">
                            <p style="color: inherit; text-align: center; padding: 0px 10px; border-color: rgb(198, 198, 199); white-space: normal;">
                                <img alt="" border="0" data-width="100%" opacity="" src="http://image.135editor.com/files/users/149/1493176/201612/tB9jNbNG_tepn.jpg" style="border-color: rgb(198, 198, 199); color: inherit; width: 100%; margin: 0px;" title="" vspace="0" width="100%" height="" mapurl=""/>
                            </p>
                        </section>
                        <section style="margin-top: -16px; box-sizing: border-box; border-color: rgb(198, 198, 199); margin-bottom: 18px; color: inherit;">
                            <br/>
                        </section>
                    </section>
                </section>
                <section class="_135editor" data-tools="135编辑器" data-id="85556" style="position: relative; border: 0px none; padding: 0px; box-sizing: border-box;">
                    <section style="margin: 5px 0px 10px; line-height: 24px; color: rgb(70, 70, 72); border-color: rgb(198, 198, 199); box-sizing: border-box;">
                        <section style="margin: 0px; padding: 10px 0px 8px; color: inherit; border: 1px solid rgb(198, 198, 199); box-shadow: rgb(198, 198, 198) 0px 0px 5px; box-sizing: border-box;">
                            <p style="color: inherit; text-align: center; padding: 0px 10px; border-color: rgb(198, 198, 199); white-space: normal;">
                                <img alt="" border="0" data-width="100%" opacity="" src="http://image.135editor.com/files/users/149/1493176/201612/qzvt9Ytz_LpOn.jpg" style="border-color: rgb(198, 198, 199); color: inherit; width: 100%; margin: 0px;" title="" vspace="0" width="100%" height="" mapurl=""/>
                            </p>
                        </section>
                        <section style="margin-top: -16px; box-sizing: border-box; border-color: rgb(198, 198, 199); margin-bottom: 18px; color: inherit;">
                            <br/>
                        </section>
                    </section>
                </section>
                <section style="clear: both; height: 0px; width: 0px; box-sizing: border-box;"></section>
            </section>
            <p style="font-family: 微软雅黑; font-size: 16px; text-align: center; white-space: normal;">
                <span style="color: #666666; text-align: justify; font-family: 微软雅黑; font-size: 14px;">美酒佳肴 </span><span style="color: #666666; font-family: 微软雅黑; font-size: 14px; text-align: justify;">任君享用</span>
            </p>
            <p style="font-family: 微软雅黑; font-size: 16px; white-space: normal;">
                <br/>
            </p>
            <section class="_135editor" data-tools="135编辑器" data-id="85556" style="position: relative; border: 0px none; padding: 0px; box-sizing: border-box;">
                <section style="margin: 5px 0px 10px; line-height: 24px; color: rgb(70, 70, 72); border-color: rgb(198, 198, 199); box-sizing: border-box;">
                    <section style="margin: 0px; padding: 10px 0px 8px; color: inherit; border: 1px solid rgb(198, 198, 199); box-shadow: rgb(198, 198, 198) 0px 0px 5px; box-sizing: border-box;">
                        <p style="color: inherit; text-align: center; padding: 0px 10px; border-color: rgb(198, 198, 199); white-space: normal;">
                            <img alt="" border="0" data-width="100%" opacity="" src="http://image.135editor.com/files/users/149/1493176/201612/b7d9aJqC_kf6a.jpg" style="border-color: rgb(198, 198, 199); color: inherit; width: 100%; margin: 0px;" title="" vspace="0" width="100%" height="" mapurl=""/>
                        </p>
                    </section>
                    <section style="margin-top: -16px; box-sizing: border-box; border-color: rgb(198, 198, 199); margin-bottom: 18px; color: inherit;">
                        <br/>
                    </section>
                </section>
            </section>
            <p style="font-family: 微软雅黑; font-size: 16px; text-align: center; white-space: normal;">
                <span style="color: #666666; font-size: 14px; text-align: justify; font-family: 微软雅黑;">这就是传说中的三层大蛋糕啦</span>
            </p>
            <section class="_135editor" data-tools="135编辑器" data-id="16401" style="font-family: 微软雅黑; font-size: 16px; border: 0px none; padding: 0px; box-sizing: border-box;">
                <p style="text-align: center; white-space: normal;">
                    <img data-id="16401" data-role="guide-img" title="金属质感分割线" src="http://image3.135editor.com/cache/remote/aHR0cHM6Ly9tbWJpei5xbG9nby5jbi9tbWJpei9jWlYyaFJwdUFQakVJaWJCMVVZdzFWTVB6c2NOeFJlS1pWeEVoMjNxQjlLZ1BxRnEzdW95QnkzTTkzUGNGT3VucnZqa1lWcnRmdlhNd29yYkJ1V0FaNEEvMA==" style="display: inline;"/>
                </p>
            </section>
            <p style="font-family: 微软雅黑; font-size: 16px; text-align: center; white-space: normal;">
                <span style="color: #666666; text-align: justify; font-size: 14px; font-family: 微软雅黑;">酒足饭饱之后</span>
            </p>
            <p style="font-family: 微软雅黑; font-size: 16px; text-align: center; white-space: normal;">
                <span style="color: #666666; text-align: justify; font-size: 14px; font-family: 微软雅黑;">惊喜接二连三的到来</span>
            </p>
            <p style="font-family: 微软雅黑; font-size: 16px; text-align: center; white-space: normal;">
                <span style="color: #666666; text-align: justify; font-size: 14px; font-family: 微软雅黑;">猜猜接下来谁出场了？</span>
            </p>
            <section class="_135editor" data-tools="135编辑器" data-id="3047" style="border: 0px none; padding: 0px; box-sizing: border-box;">
                <section style="border: 0px; box-sizing: border-box; width: auto; clear: both; margin: 0px; padding: 0px 0.5em 0.5em 0px;">
                    <img src="http://image.135editor.com/files/users/149/1493176/201612/QXDGVf2w_OL6v.jpg" style="box-shadow: rgb(102, 102, 102) 0.2em 0.2em 0.5em; box-sizing: border-box; margin: 0px; height: auto !important; visibility: visible !important; width: 100%;" width="100%" height="auto" border="0" opacity="" mapurl="" title="" alt="" data-width="100%"/>
                </section>
            </section>
            <section data-role="paragraph" class="_135editor" style="font-family: 微软雅黑; font-size: 16px; border: 0px none; padding: 0px; position: relative; box-sizing: border-box;">
                <p style="text-align: center; white-space: normal;">
                    <span style="color: #666666; text-align: justify; font-size: 14px; font-family: 微软雅黑;">是他！就是他！</span>
                </p>
                <p style="text-align: center; white-space: normal;">
                    <span style="color: #666666; text-align: justify; font-size: 14px; font-family: 微软雅黑;">汕大李克勤！</span>
                </p>
                <p style="text-align: center; white-space: normal;">
                    <span style="color: #666666; text-align: justify; font-size: 14px; font-family: 微软雅黑;">让女生尖叫的王铭言！</span>
                </p>
                <p style="text-align: center; white-space: normal;">
                    <span style="color: #666666; text-align: justify; font-size: 14px; font-family: 微软雅黑;">他的原创歌曲可谓百听不厌</span>
                </p>
                <p style="text-align: center; white-space: normal;">
                    <span style="color: #666666; text-align: justify; font-size: 14px; font-family: 微软雅黑;">令人沉浸其中</span>
                </p>
            </section>
            <section data-role="paragraph" class="_135editor" style="font-family: 微软雅黑; font-size: 16px; border: 0px none; padding: 0px; box-sizing: border-box;">
                <p style="white-space: normal;">
                    <br/>
                </p>
            </section>
            <section class="_135editor" data-tools="135编辑器" data-id="16401" style="font-family: 微软雅黑; font-size: 16px; border: 0px none; padding: 0px; box-sizing: border-box;">
                <section class="_135editor" style="position: relative; border: 0px none; padding: 0px; box-sizing: border-box;">
                    <section class="_135editor" data-tools="135编辑器" data-id="85649" style="border: 0px none; padding: 0px; position: relative; box-sizing: border-box;">
                        <section style="border: none; margin: 0.8em 0px 0.3em; box-sizing: border-box; padding: 0px;">
                            <section style="margin: 0px 0px 2px 4px; color: rgb(94, 123, 130); border-color: rgb(237, 241, 242); text-align: right; box-sizing: border-box;">
                                <section style="display: inline-block; width: 60%; color: inherit; border-color: rgb(158, 207, 219); box-sizing: border-box;" data-width="60%">
                                    <section class="_135editor" data-tools="135编辑器" data-id="3047" style="border: 0px none; padding: 0px; box-sizing: border-box;">
                                        <section style="border: 0px; box-sizing: border-box; width: auto; clear: both; margin: 0px; padding: 0px 0.5em 0.5em 0px;">
                                            <img src="http://image.135editor.com/files/users/115/1155380/201612/GAxn4WGW_FQmh.jpg" style="box-shadow: rgb(102, 102, 102) 0.2em 0.2em 0.5em; box-sizing: border-box; margin: 0px; height: auto !important; visibility: visible !important; width: 100%;" width="100%" height="auto" border="0" opacity="" mapurl="" title="" alt="" data-width="100%"/>
                                        </section>
                                    </section>
                                </section>
                            </section>
                            <section style="margin: -90px 0px 2px 4px; color: rgb(94, 123, 130); border-color: rgb(158, 207, 219); width: 60%; box-sizing: border-box;" data-width="60%">
                                <section class="_135editor" data-tools="135编辑器" data-id="3047" style="border: 0px none; padding: 0px; box-sizing: border-box;">
                                    <section style="border: 0px; box-sizing: border-box; width: auto; clear: both; margin: 0px; padding: 0px 0.5em 0.5em 0px;">
                                        <img src="http://image.135editor.com/files/users/115/1155380/201612/MgVds9rC_gzBE.jpg" style="box-shadow: rgb(102, 102, 102) 0.2em 0.2em 0.5em; box-sizing: border-box; margin: 0px; height: auto !important; visibility: visible !important; width: 100%;" width="100%" height="auto" border="0" opacity="" mapurl="" title="" alt="" data-width="100%"/>
                                    </section>
                                </section>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
            <section data-role="paragraph" class="_135editor" style="font-family: 微软雅黑; font-size: 16px; border: 0px none; padding: 0px; position: relative; box-sizing: border-box;">
                <p style="text-align: center; white-space: normal;">
                    <span style="color: #666666; text-align: justify; font-size: 14px; font-family: 微软雅黑;">神奇的魔术表演令小朋友都看呆了</span>
                </p>
                <section class="_135editor" data-tools="135编辑器" data-id="16401" style="position: relative; border: 0px none; padding: 0px; box-sizing: border-box;">
                    <section class="_135editor" data-tools="135编辑器" data-id="701" style="border: 0px none; padding: 0px; box-sizing: border-box;">
                        <section style="text-align: center; box-sizing: border-box;">
                            <section style="display: inline-block; width: 100%; box-sizing: border-box;">
                                <img data-id="701" data-role="guide-img" style="max-width: 100%; width: 100%; display: inline;" title="银色金属分割线" src="http://image3.135editor.com/cache/remote/aHR0cHM6Ly9tbWJpei5xbG9nby5jbi9tbWJpei9jWlYyaFJwdUFQZ3lHUmh5b3FiVHVwTjdsTTJOU1ZKcWthRlF6QTU5RjZraWJsSVFzTDE3NWx4SVZaYlNMckZERmljaWJ4WGlhWHBYbUFHa3JHTlNpYjc2WWx3LzA="/>
                            </section>
                        </section>
                    </section>
                    <p style="text-align: center; white-space: normal;">
                        <span style="color: #666666; text-align: justify; font-size: 14px; font-family: 微软雅黑;">随着主持人宣布领舞的再次登场</span>
                    </p>
                    <p style="text-align: center; white-space: normal;">
                        <span style="color: #666666; text-align: justify; font-size: 14px; font-family: 微软雅黑;">全场气氛又一次被引爆</span>
                    </p>
                    <p style="text-align: center; white-space: normal;">
                        <span style="color: #666666; text-align: justify; font-size: 14px; font-family: 微软雅黑;">嗨起来吧</span>
                    </p>
                    <section class="_135editor" data-tools="135编辑器" data-id="3047" style="border: 0px none; padding: 0px; box-sizing: border-box;">
                        <section style="border: 0px; box-sizing: border-box; width: auto; clear: both; margin: 0px; padding: 0px 0.5em 0.5em 0px;">
                            <img src="http://image.135editor.com/files/users/115/1155380/201612/whMewO9y_PS2k.jpg" style="box-shadow: rgb(102, 102, 102) 0.2em 0.2em 0.5em; box-sizing: border-box; margin: 0px; height: auto !important; visibility: visible !important; width: 100%;" width="100%" height="auto" border="0" opacity="" mapurl="" title="" alt="" data-width="100%"/>
                        </section>
                    </section>
                    <section class="_135editor" data-tools="135编辑器" data-id="85788" style="border: 0px none; padding: 0px; box-sizing: border-box;">
                        <section style="margin: 0px auto; box-sizing: border-box;" class="layout">
                            <section style="border: 0px; box-sizing: border-box; width: 100%; clear: both; overflow: hidden; padding: 0px; margin: 0px;" data-width="100%"></section>
                        </section>
                    </section>
                    <p style="text-align: center; white-space: normal;">
                        <span style="color: #666666; text-align: justify; font-size: 14px; font-family: 微软雅黑;">五色电灯在秋风中摇曳</span>
                    </p>
                    <p style="text-align: center; white-space: normal;">
                        <span style="color: #666666; text-align: justify; font-size: 14px; font-family: 微软雅黑;">象是无数道交织在一起的影虹</span>
                    </p>
                    <p style="text-align: center; white-space: normal;">
                        <span style="color: #666666; text-align: justify; font-size: 14px; font-family: 微软雅黑;">裙子随风飘扬</span>
                    </p>
                    <p style="text-align: center; white-space: normal;">
                        <span style="color: #666666; text-align: justify; font-size: 14px; font-family: 微软雅黑;">皮鞋后跟响着清脆的声音</span>
                    </p>
                    <p style="text-align: center; white-space: normal;">
                        <span style="color: #666666; text-align: justify; font-size: 14px; font-family: 微软雅黑;">脚下是一片薄薄的烟尘</span>
                    </p>
                </section>
                <p style="white-space: normal;">
                    <br/>
                </p>
                <section class="_135editor" data-tools="135编辑器" data-id="3047" style="border: 0px none; padding: 0px; box-sizing: border-box;">
                    <section style="border: 0px; box-sizing: border-box; width: auto; clear: both; margin: 0px; padding: 0px 0.5em 0.5em 0px;">
                        <img src="http://image.135editor.com/files/users/149/1493176/201612/rBrEzyyg_Gg7c.jpg" style="box-shadow: rgb(102, 102, 102) 0.2em 0.2em 0.5em; box-sizing: border-box; margin: 0px; height: auto !important; visibility: visible !important; width: 100%;" width="100%" height="auto" border="0" opacity="" mapurl="" title="" alt="" data-width="100%"/>
                    </section>
                </section>
                <section data-role="paragraph" class="_135editor" style="border: 0px none; padding: 0px; position: relative; box-sizing: border-box;">
                    <p style="text-align: center; white-space: normal;">
                        <span style="color: #666666; text-align: justify; font-size: 14px; font-family: 微软雅黑;">看这整齐划一的步伐</span>
                    </p>
                    <p style="text-align: center; white-space: normal;">
                        <span style="color: #666666; text-align: justify; font-size: 14px; font-family: 微软雅黑;">不得不为他们的天赋感到赞叹呢</span>
                    </p>
                    <p style="white-space: normal;">
                        <br/>
                    </p>
                    <section data-id="3047" class="_135editor" style="border: 0px none; padding: 0px; box-sizing: border-box;">
                        <section style="border: 0px; box-sizing: border-box; width: auto; clear: both; margin: 0px; padding: 0px 0.5em 0.5em 0px;">
                            <img src="http://image.135editor.com/files/users/115/1155380/201612/sZqG2OVx_HSpW.jpg" style="box-shadow: rgb(102, 102, 102) 0.2em 0.2em 0.5em; box-sizing: border-box; margin: 0px; height: auto !important; visibility: visible !important; width: 100%;" width="100%" height="auto" border="0" opacity="" mapurl="" title="" alt="" data-width="100%"/>
                        </section>
                    </section>
                    <p style="margin: 5px; background-color: rgba(255, 255, 255, 0.6); text-align: center; white-space: normal;">
                        <span style=";color: #666666; font-family: 微软雅黑, sans-serif;;font-size: 14px;">摩擦摩擦</span>
                    </p>
                    <p style="margin: 5px; background-color: rgba(255, 255, 255, 0.6); text-align: center; white-space: normal;">
                        <span style=";color: #666666; font-family: 微软雅黑, sans-serif;;font-size: 14px;">是魔鬼的步伐~</span>
                    </p>
                </section>
                <p style="white-space: normal;">
                    <br/>
                </p>
                <section class="_135editor" data-tools="135编辑器" data-id="3047" style="border: 0px none; padding: 0px; box-sizing: border-box;">
                    <section style="border: 0px; box-sizing: border-box; width: auto; clear: both; margin: 0px; padding: 0px 0.5em 0.5em 0px;">
                        <section class="_135editor" data-tools="135编辑器" data-id="3047" style="border: 0px none; padding: 0px; box-sizing: border-box;">
                            <section style="border: 0px; box-sizing: border-box; width: auto; clear: both; margin: 0px; padding: 0px 0.5em 0.5em 0px;">
                                <img src="http://image.135editor.com/files/users/115/1155380/201612/8Mc6pwN4_szpB.jpg" style="box-shadow: rgb(102, 102, 102) 0.2em 0.2em 0.5em; box-sizing: border-box; margin: 0px; height: auto !important; visibility: visible !important; width: 100%;" width="100%" height="auto" border="0" opacity="" mapurl="" title="" alt="" data-width="100%"/>
                            </section>
                        </section>
                    </section>
                </section>
                <p style="text-align: center; white-space: normal;">
                    <span style="color: #666666; text-align: justify; font-size: 14px; font-family: 微软雅黑;">精致的服饰与妆容</span>
                </p>
                <p style="text-align: center; white-space: normal;">
                    <span style="color: #666666; text-align: justify; font-size: 14px; font-family: 微软雅黑;">在头顶的光束下闪闪发光</span>
                </p>
                <p style="text-align: center; white-space: normal;">
                    <span style="color: #666666; text-align: justify; font-size: 14px; font-family: 微软雅黑;">一些略带羞涩的舞步</span>
                </p>
                <p style="text-align: center; white-space: normal;">
                    <span style="color: #666666; text-align: justify; font-size: 14px; font-family: 微软雅黑;">交错着汇聚成礼服与礼裙的海洋</span>
                </p>
                <section class="_135editor" data-tools="135编辑器" data-id="701" style="border: 0px none; padding: 0px; box-sizing: border-box;">
                    <section style="text-align: center; box-sizing: border-box;">
                        <section style="display: inline-block; width: 100%; box-sizing: border-box;"></section>
                    </section>
                </section>
                <p style="text-align: center; white-space: normal;">
                    <span style="color: #666666; text-align: justify; font-size: 14px; font-family: 微软雅黑;">美好的时间总是短暂的<br/></span>
                </p>
                <p style="text-align: center; white-space: normal;">
                    <span style="color: #666666; text-align: justify; font-size: 14px; font-family: 微软雅黑;">不知不觉间</span>
                </p>
                <p style="text-align: center; white-space: normal;">
                    <span style="color: #666666; text-align: justify; font-size: 14px; font-family: 微软雅黑;">舞会就要在大家的依依不舍中结束了</span>
                </p>
                <section class="_135editor" data-tools="135编辑器" data-id="3047" style="border: 0px none; padding: 0px; box-sizing: border-box;">
                    <section style="border: 0px; box-sizing: border-box; width: auto; clear: both; margin: 0px; padding: 0px 0.5em 0.5em 0px;">
                        <img src="http://image.135editor.com/files/users/115/1155380/201612/NFJGGYFy_yLYt.jpg" style="box-shadow: rgb(102, 102, 102) 0.2em 0.2em 0.5em; box-sizing: border-box; margin: 0px; height: auto !important; visibility: visible !important; width: 100%;" width="100%" height="auto" border="0" opacity="" mapurl="" title="" alt="" data-width="100%"/>
                    </section>
                </section>
                <section data-role="paragraph" class="_135editor" style="border: 0px none; padding: 0px; position: relative; box-sizing: border-box;">
                    <p style="text-align: center; white-space: normal;">
                        <span style="color: #666666; text-align: justify; font-size: 14px; font-family: 微软雅黑;">大家在愉快地合影留恋</span>
                    </p>
                    <section class="_135editor" data-tools="135编辑器" data-id="701" style="border: 0px none; padding: 0px; box-sizing: border-box;">
                        <section style="text-align: center; box-sizing: border-box;">
                            <section style="display: inline-block; width: 100%; box-sizing: border-box;">
                                <img data-id="701" data-role="guide-img" style="max-width: 100%; width: 100%; display: inline;" title="银色金属分割线" src="http://image3.135editor.com/cache/remote/aHR0cHM6Ly9tbWJpei5xbG9nby5jbi9tbWJpei9jWlYyaFJwdUFQZ3lHUmh5b3FiVHVwTjdsTTJOU1ZKcWthRlF6QTU5RjZraWJsSVFzTDE3NWx4SVZaYlNMckZERmljaWJ4WGlhWHBYbUFHa3JHTlNpYjc2WWx3LzA="/>
                            </section>
                        </section>
                    </section>
                    <p style="text-align: center; white-space: normal;">
                        <span style="color: #666666; text-align: justify; font-size: 14px; font-family: 微软雅黑;">随着Zootopia舞会的圆满落幕</span>
                    </p>
                    <p style="text-align: center; white-space: normal;">
                        <span style="color: #666666; text-align: justify; font-size: 14px; font-family: 微软雅黑;">今晚的狂欢也告一段落</span>
                    </p>
                    <p style="text-align: center; white-space: normal;">
                        <span style="color: #666666; text-align: justify; font-size: 14px; font-family: 微软雅黑;">希望对于各位来说</span>
                    </p>
                    <p style="text-align: center; white-space: normal;">
                        <span style="color: #666666; text-align: justify; font-size: 14px; font-family: 微软雅黑;">这个初舞之夜不仅是在舞池迈出的第一步</span>
                    </p>
                    <p style="text-align: center; white-space: normal;">
                        <span style="color: #666666; text-align: justify; font-size: 14px; font-family: 微软雅黑;">也是人生新篇章的翻启</span>
                    </p>
                    <p style="text-align: center; white-space: normal;">
                        <span style="color: #666666; text-align: justify; font-size: 14px; font-family: 微软雅黑;">我们很高兴地看到</span>
                    </p>
                    <p style="text-align: center; white-space: normal;">
                        <span style="color: #666666; text-align: justify; font-size: 14px; font-family: 微软雅黑;">在灯光与乐声中</span>
                    </p>
                    <p style="text-align: center; white-space: normal;">
                        <span style="color: #666666; text-align: justify; font-size: 14px; font-family: 微软雅黑;">克服胆怯、抛去紧张和拘束的舞者们</span>
                    </p>
                    <p style="text-align: center; white-space: normal;">
                        <span style="color: #666666; text-align: justify; font-size: 14px; font-family: 微软雅黑;">尽情地享受着party的热度</span>
                    </p>
                    <p style="text-align: center; white-space: normal;">
                        <span style="color: #666666; text-align: justify; font-size: 14px; font-family: 微软雅黑;">全身心投入到现场的欢愉中</span>
                    </p>
                    <p style="text-align: center; white-space: normal;">
                        <span style="color: #666666; text-align: justify; font-size: 14px; font-family: 微软雅黑;">你们的笑容</span>
                    </p>
                    <p style="text-align: center; white-space: normal;">
                        <span style="color: #666666; text-align: justify; font-size: 14px; font-family: 微软雅黑;">就是对我们努力的最大肯定</span>
                    </p>
                    <section class="_135editor" data-tools="135编辑器" data-id="16401" style="border: 0px none; padding: 0px; box-sizing: border-box;">
                        <p style="text-align: center; white-space: normal;">
                            <img data-id="16401" data-role="guide-img" title="金属质感分割线" src="http://image3.135editor.com/cache/remote/aHR0cHM6Ly9tbWJpei5xbG9nby5jbi9tbWJpei9jWlYyaFJwdUFQakVJaWJCMVVZdzFWTVB6c2NOeFJlS1pWeEVoMjNxQjlLZ1BxRnEzdW95QnkzTTkzUGNGT3VucnZqa1lWcnRmdlhNd29yYkJ1V0FaNEEvMA==" style="display: inline;"/>
                        </p>
                    </section>
                    <p style="text-align: center; white-space: normal;">
                        <br/>
                    </p>
                    <p style="text-align: center; white-space: normal;">
                        <span style="color: #666666; font-family: 微软雅黑; font-size: 14px; text-align: justify; white-space: pre-wrap;">最后附上一张我们工作人员的全家福~</span>
                    </p>
                    <p style="white-space: normal;">
                        <img src="http://image.135editor.com/files/users/149/1493176/201612/zJHbQhLx_Fjfe.jpg"/>
                    </p>
                    <p style="text-align: center; white-space: normal;">
                        <span style="color: #666666; text-align: justify; font-size: 14px; font-family: 微软雅黑;">舞会的成功举办</span>
                    </p>
                    <p style="text-align: center; white-space: normal;">
                        <span style="color: #666666; text-align: justify; font-size: 14px; font-family: 微软雅黑;">离不开你们在背后的努力和付出</span>
                    </p>
                    <p style="text-align: center; white-space: normal;">
                        <span style="color: #666666; text-align: justify; font-size: 14px; font-family: 微软雅黑;">相信你们在这次活动后<br/></span>
                    </p>
                    <p style="text-align: center; white-space: normal;">
                        <span style="color: #666666; text-align: justify; font-size: 14px; font-family: 微软雅黑;">也变得更加坚毅和成熟</span>
                    </p>
                    <p style="text-align: center; white-space: normal;">
                        <span style="color: #666666; text-align: justify; font-size: 14px; font-family: 微软雅黑;">在我心中</span>
                    </p>
                    <p style="text-align: center; white-space: normal;">
                        <span style="color: #666666; text-align: justify; font-size: 14px; font-family: 微软雅黑;">你们永远是最棒哒</span>
                    </p>
                    <section class="_135editor" data-tools="135编辑器" data-id="701" style="border: 0px none; padding: 0px; box-sizing: border-box;">
                        <section style="text-align: center; box-sizing: border-box;">
                            <section style="display: inline-block; width: 100%; box-sizing: border-box;">
                                <img data-id="701" data-role="guide-img" style="max-width: 100%; width: 100%; display: inline;" title="银色金属分割线" src="http://image3.135editor.com/cache/remote/aHR0cHM6Ly9tbWJpei5xbG9nby5jbi9tbWJpei9jWlYyaFJwdUFQZ3lHUmh5b3FiVHVwTjdsTTJOU1ZKcWthRlF6QTU5RjZraWJsSVFzTDE3NWx4SVZaYlNMckZERmljaWJ4WGlhWHBYbUFHa3JHTlNpYjc2WWx3LzA="/>
                            </section>
                        </section>
                    </section>
                    <p style="white-space: normal;">
                        <br/>
                    </p>
                    <section class="_135editor" data-tools="135编辑器" data-id="85994" data-color="rgb(89, 195, 249)" data-custom="rgb(89, 195, 249)" style="border: 0px none; padding: 0px; position: relative; box-sizing: border-box;">
                        <section style="text-align: center; box-sizing: border-box;">
                            <section style="border: 1px solid rgb(198, 198, 198); display: inline-block; padding: 10px 15px 10px 10px; box-sizing: border-box;">
                                <section style="display: inline-block; box-sizing: border-box;">
                                    <img src="http://image2.135editor.com/cache/remote/aHR0cHM6Ly9tbWJpei5xbG9nby5jbi9tbWJpei95cVZBcW9adkRpYkVMdXlHZ3o4OWljZktkZ3hmSFc4OVdQUXo2TU5PaWNodWtWRzI4QmU3cHBuU2ljNVRZMmhnaWJxSjZ2d3F5UFlzVDRQSUJRd21pYlZzR2lhMmcvMD93eF9mbXQ9cG5n" style="vertical-align:top;"/><img src="http://image.135editor.com/files/users/115/1155380/201611/DZu2SYSp_hw8I.jpg" style="width: 100px; margin-top: 20px;" width="100" height="auto" border="0" opacity="" mapurl="" title="二维码.jpg" alt="二维码.jpg"/>
                                    <section style="display: inline-block; vertical-align: top; margin-top: 35px; padding-left: 20px; box-sizing: border-box;">
                                        <p style="white-space: normal;">
                                            <span style="font-size: 13px; color: #00B0F0;">扫描二维码</span>
                                        </p>
                                        <p style="white-space: normal;">
                                            <span style="font-size: 13px; color: #00B0F0;">关注更多关于</span>
                                        </p>
                                        <p style="white-space: normal;">
                                            <span style="font-size: 13px; color: #00B0F0;">思源书院学生会的消息哦</span>
                                        </p>
                                    </section>
                                </section>
                            </section>
                        </section>
                    </section>
                </section>
                <section data-role="paragraph" class="_135editor" style="border: 0px none; padding: 0px; box-sizing: border-box;">
                    <p style="white-space: normal;">
                        <br/>
                    </p>
                </section>
            </section>
            <section data-role="paragraph" class="_135editor" style="font-family: 微软雅黑; font-size: 16px; border: 0px none; padding: 0px; position: relative; box-sizing: border-box;">
                <p style="text-align: right; white-space: normal;">
                    <span style="font-size: 13px;">拍摄：杨俊如 佘芙怡 </span>
                </p>
                <p style="text-align: right; white-space: normal;">
                    <span style="font-size: 13px;"> 图文编辑：李俊汶 &nbsp; &nbsp; </span>
                </p>
            </section>
            <section data-role="paragraph" class="_135editor" style="font-family: 微软雅黑; font-size: 16px; border: 0px none; padding: 0px; box-sizing: border-box;">
                <p style="white-space: normal;">
                    <br/>
                </p>
            </section>
        </section>
    </section>
</section>`
    /**
    * WxParse.wxParse(bindName , type, data, target,imagePadding)
    * 1.bindName绑定的数据名(必填)
    * 2.type可以为html或者md(必填)
    * 3.data为传入的具体数据(必填)
    * 4.target为Page对象,一般为this(必填)
    * 5.imagePadding为当图片自适应是左右的单一padding(默认为0,可选)
    */
    var that = this;
    WxParse.wxParse('article', 'html', article, that, 5);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})