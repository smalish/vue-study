<template>
    <div v-show="isShow" class="out_div">
        <div class="flex_div">
            <div class="flex_item" :class="{hasicon: icon}">

                <span v-if="icon" class="icon" :class="icon"></span>
                <span class="message">{{message}}</span>

            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            isShow: false,
            message: '',
            icon: '',
            duration: 1500,
            complete: null
        }
    }
}
</script>


<style lang="less" scoped>
    .out_div{
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: 9999;
        .flex_div{
            display:flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;

            .flex_item{
                display:block;
                max-width: 52vw;
                padding: 7.2vw 4vw;              
                background-color: #4C4C4C;
                border-radius: 1.86vw;
            }
            .hasicon{
                padding: 4.5vw 5.86vw;
            }
            .icon{
                display:block;
                width: 100%;
                height: 8vw;
                padding-top: 0.8vw;
                padding-bottom: 2.2vw;
                background-size: 8vw 8vw;
                background-position: center;
                background-repeat: no-repeat;
            }
            .succ{
                background-image: url('data:image/png;base64,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');
            }
            .fail{
                background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAABFJJREFUaAXlm12ITVEUx+fOGEJIGWOQogxqhDwRxi35iFJKKfFECQ9qakihhkehvHkxFMOLFKIonzXNw2gezQMlYTKKwtRgZvz+19m3+7Hvmcucfc659676z95n73XWWv/9ce4+e59JVDmWkZGRabhYC5aDRg/1pFM8kFR98/CR9JWHLtLORCLxkzTeAskl4DToBkPgf+U7N94Du8HEWLFWQOAA6AEu5CtGL4CGSIkTwBRwCvSDMGQAJ2fB1FCJ47Aa7AN9IAp5h9OtoZDG0TzQGQVLi0/1dsIZcYxvAZ8tjqMsuobz2kBJY7AGnAHDII7ykKD0U+crRQ0FDNVh5SZI+lqLvvIlIWzmt7u/UCijEvZa7SkGVhQyErPyR8SzCdLDtriqbYWmDLLjyd8GpUJWoW8Ax5WxScEehqwa4wbYabsx5mVDxJekl5/nxunXwxdRLkWy4lgDOui0GbrIFCthFA+jdDBTsQTzc4j5XG7ceUMasgtR6gGTcpVL8FpDu5Gh/cbEntXDkFUDXAauyOpV7xiY7UF5l69/GtpHgV0gvAu4lDznODvq0iG2B4GGd7ZQWAteA5eS92qHswaXDj3b5w3b9BymYj+Fl0yFi5S5lPaXaV9BZV47yA9gcybuf2TO4UMOHMXFpJ5JWxRMijANvJr8MhWUsewQN9PDe8qYqKG2UZnUnKKH35KfZ2pcpRHOYUNpsbZpmsIgazxGnK7SkNb8rRRpEmH1cKXIAhFeWils4TlfhOdWEOE6EQ53Qzva1p0swjrsqhRJEbaub8u0BVL7VjqqrBT5piFdcYT7KqV74dmnHu4NizDLWOsGQFj+xTVUwjjcayFnK7OoBVLUOw4z3YGYKs5IG70szaueusi2efkwku4EAWg34AvQsUo5i3ZHp1fzjqr9Hn0xU+7SJa6aw5Jbf5Oy/pviaHY8ZkL1PdCcLkf5Dak59PCnVA8rQ8GDEJhqHoV58mAoPfA4muuqKh5ezcC1RHHyIE7rDNOsFwcqdJ66xlQ6SGfT0vq8MC341GLkQ7og+MwLfOrTx5SYh5a5PmkyIaZZje7A74lMm1mEaYnHVHZkKgSct62qXO6Jd8DpiS8HDTGg7xpdiE7ydFooH4LyKnMh4pC3drcOJxR1DnMXZI0A35aKV+Uw4Wyjd+/nhmUl5Cm25iqX0HWrjeyo8dPT7S7GmmOb7X7ErEPa3EBgE8jrQbbKlMU87SS+JL07WChO65A2yt6N27mWobiLYtzuR1YEfAlLAQP6bjEJrug6pqLYkl6swYXIEG8BY/kfhqCnr2JpCY6hxRIO9L20q9/pf2kQxZD6jMESZrBFONKi4fq/RBewrnznLSqCZWmxhtP14HnAZPzMydd6SyjhFhFEM7gDfoGgRTZluzlcVkV4I6h6cAQ8A2NZI+te2ZCt+iJcF63iu/Ao2opFkUC1G6p365VgkYdZpLZ/wdPpR68HbRvrHVabi4HLH36A9dcXH1G6AAAAAElFTkSuQmCC');
            }
            .message{
                display:block;
                width: 100%;
                line-height: 5.3vw;
                font-size: 3.73vw;
                text-align: center;
                color: #fff;
            }
        }
    }
</style>


