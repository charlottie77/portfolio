<template>
    <div id="case-1">
        <div class="back-btn">
            <button></button>
        </div>
        <div class="c1-banner">
        </div>
        <div class="c1-content-div">
            <div class="c1-content">
                <div class="c-title c-slim-58">
                    <h1>AI Course Platform</h1>
                    <h2>We create an all-in-one platform for K-12 AI education.</h2>
                </div>
                <div class="c-info c-slim-58"> 
                    <div class="c-info-left">
                        <div class="c-info-list">
                            <label class="il-title">Team</label>
                            <label>Linas Zhang</label>
                            <label>Me</label>
                            <label>Jay Zhu</label>
                            <label>Jan Doring</label>
                            <label>Dachang Liu</label>
                        </div>
                        <div class="c-info-list cil-tool">
                            <label class="il-title">Tool &amp; Tech</label>
                            <label>Sketch、illustrator、After Effect</label>
                            <label>Unity 3D、TensorFlow、OpenCV</label>
                        </div>
                    </div>
                    <div class="c-info-right">
                        <div class="c-info-list">
                            <label class="il-title">My Role</label>
                            <label>Researcher</label>
                            <label>Concept Design</label>
                            <label>UX Design</label>
                            <label>Programmer</label>
                            <p>Due to my <span>CS background</span> and deep participation of design, 
                                I <span>collaborated</span> with another programmer on <span>technology selection, 
                                requirement modeling, architecture design and high-level system 
                                design</span>. I also complete <span>algorithm design</span> relating to machine 
                                learning and computer vision.</p>
                            <label>Scrum Master</label>
                            <p>I lead our team using agile software development methods.</p>
                        </div>
                    </div>
                </div>
                <div class="c-secret c-slim-58">
                    <p class="cs-p">To comply with my non-disclosure agreement, I have omitted and obfuscated confidential information in this case study. All information in this case study is my own and does not necessarily reflect the views of others.</p>
                </div>
                <div class="c-overview title-170 c-slim-58">
                    <h3>Overview</h3>
                    <div class="co-t-1">
                        <h4>Background</h4>
                        <div class="c-quote">
                            <p class="cq-content">“It’s important that our children be given accurate information about Al so they can understand this technology that is reshaping our lives.”</p>
                            <p class="cq-by">By Prof. David Touretzky, an AI researcher at CMU</p>
                        </div>
                        <div class="co-1 title-70">
                            <div class="co-1-1">
                                <label class="co11-img"></label>
                            </div>
                            <p class="co-1-2 p-text">There is huge public interest in AI nowadays. For children, their parents want them to study this cutting-edge knowledge earlier for many reasons. Nevertheless, in China, most of AI education is still in a primary stage. </p>
                        </div>
                        <div class="co-2 title-50 ">
                            <div class="co-2-1">
                                <label class="co21-img"></label>
                            </div>
                            <div class="co-2-2">
                                <p class="cs-p">The weakness of current AI K-12 education in China. </p>
                            </div>
                        </div>
                    </div>
                    <div class="co-t-2">
                        <h4>The Mission</h4>
                        <div class="cot-2-1 title-90">
                            <label class="label-goal">Explore a better solution for AI K-12 Education.</label>
                        </div>
                        <p class="p-text title-50">In this way, we design an all-in-one AI study platform for a series of AI courses conducted by CDI (Center for Digital Innovation), Tongji University.  </p>
                    </div>
                </div>
                <label class="co3-img title-50"></label>
                <div class="c-overview title-170 c-slim-58">
                    <div class="co-t-3">
                        <h4>Design Process</h4>
                    </div>
                </div>
                <label class="cot3-img"></label>
                <div class="c-overview c-slim-58">
                    <p class="p-text"> We have <span>iterations between stage 3 to stage 8</span>, where we used agile development methods. </p>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
  name: 'AICourse'
}
  
</script>

<style scoped>
.title-170 {
    margin-top: 170px;
}
.title-90 {
    margin-top: 90px;
}

.title-70 {
    margin-top: 70px;
}

.title-50 {
    margin-top: 50px;
}
.title-30 {
    margin-top: 30px;
}
.p-text {
    font-size: 14px;
    color: #000000;
    letter-spacing: 1.06px;
    line-height: 24px;
}

.p-text span {
    color: #4A90E2;
    font-weight: 600;
}

h1 {
    letter-spacing: 2px;
    font-size: 42px;
    color: #4A4A4A;
}

h2 {
    font-size: 28px;
    color: #4A90E2;
    letter-spacing: 1.12px;
    font-family: 'SFD-Light';
    margin: 16px 0px;
}

h3 {
    font-size: 32px;
    color: #9B9B9B;
    letter-spacing: 1.5px;
    font-family: 'SFD-Semibold';
}

h4 {
    font-size: 22px;
    color: #4A4A4A;
    letter-spacing: 1px;
}
.c-slim-58 {
    width: 58%;
}
.label-goal {
    font-size: 28px;
    color: #003B7F;
    letter-spacing: 1.12px;
    text-align: center;
    padding: 14px;
    border-top: 2px solid #003b7f;
    border-bottom: 2px solid #003b7f;
}

#case-1{
    margin-bottom: 170px;
}



.c1-banner {
    width: 100%;
    height: 500px;
    background: aliceblue url("../assets/case_1_banner.png") no-repeat;
    background-size: auto 100%;
    background-position: 50%;
}

.back-btn {
    position: fixed;
    padding-top: 30px;
    padding-left: 100px;
}

.back-btn button {
    width: 32px;
    height: 32px;
    background: #fff url("../assets/icon-back.png") no-repeat;
    background-size: 10px 20px;
    background-position: 50% 50%;
    border-style: none;
    border-radius: 50%;
    box-shadow: 0px 2px 6px rgba(124, 124, 124, 0.5);
}

.c-info {
    display: flex;
}

.c-info-left,
.c-info-right {
    flex: 1;
}

.c-info-list {
    display: flex;
    flex-direction: column;
}

.cil-tool {
    margin-top: 40px;
}

.c1-content {
    /* width: 58%; */
    display: flex;
    align-items: center;
    flex-direction: column;
}

.c1-content-div {
    margin-top: 100px;
}

.c-info-list .il-title {
    font-size: 20px;
    color: #9B9B9B;
    letter-spacing: 1px;
    font-family: 'SFD-Semibold';
}

.c-info-list label {
    font-size: 16px;
    color: #000000;
    letter-spacing: 1.06px;
    margin: 4px 0px;
}

.c-info-list p {
    font-size: 16px;
    color: #9b9b9b;
    letter-spacing: 1.06px;
    line-height: 20px;
    margin: 4px 0px 0px 8px;
}

.c-info-list p span {
    color: #4A90E2;
    font-weight: 600;
}

.c-secret {
    margin-top: 50px;
}

.cs-p{
    font-family: Charter-Italic;
    font-size: 14px;
    color: #979797;
    letter-spacing: 0.44px;
}

.c-quote .cq-content {
    font-family: Charter;
    font-size: 22px;
    color: #4A90E2;
    letter-spacing: 0.88px;
}

.c-quote .cq-by {
    font-size: 16px;
    color: #979797;
    letter-spacing: 0.62px;
}

.c-quote {
    border-left: 8px rgba(142,189,231,0.50) solid;
    padding-left: 16px;
}

.co-1 {
    display: flex;
}

.co-1-1,
.co-1-2 {
    flex: 1;
    border-style: none;
}

.co-1-1 {
    display: flex;
    justify-content: center;
}

.co-2 {
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* img stock */
.co11-img{
    background: transparent url("../assets/1.png") no-repeat;
    background-size: 350px 205px;
    background-position: center;
    width: 350px;
    height: 205px;
    box-shadow: 0px 2px 6px rgba(124, 124, 124, 0.5);
    border-style:  none;
    display: inline-block;
}

.co21-img {
    background: transparent url("../assets/2.png") no-repeat;
    background-size: 800px 132px;
    background-position: center;
    width: 800px;
    height: 132px;
    border-style:  none;
    display: inline-block;
}

.co3-img {
    background: transparent url("../assets/3.png") no-repeat;
    background-size: 100% auto;
    background-position: center;
    width: 100%;
    height: 210px;
    border-style:  none;
    display: inline-block;
}

.cot3-img {
    background: transparent url("../assets/4.png") no-repeat;
    background-size: 100% auto;
    background-position: center;
    width: 80%;
    height: 203px;
    border-style:  none;
    display: inline-block;
}

.co-2-2 {
    margin-top: 24px;
}

.cot-2-1 {
    display: flex;
    justify-content: center;
}

</style>
