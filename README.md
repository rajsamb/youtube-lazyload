# Lazyload Youtube video

  Install this package and lazy load all the youtube video with the class "youtube". Ideal for loading the site quickly.

## How to Use

1. npm install youtube-lazyload

2. On HTML use following code:

    ```
    <div class="wrapper">
        <div class="youtube" data-embed="EQW3n5aGdSI">
            <div class="play-button"></div>
        </div>
    </div>
    ```

    Note: 

    Value of the data-embed is the id of the youtube video. For e.g.

    if the youtube link is: https://www.youtube.com/embed/EQW3n5aGdSI

    then, the data-embed is : EQW3n5aGdSI


    To allow fullscreen, add attribute <code>data-fullscreen="true"</code>. For e.g. 

    ```
    <div class="wrapper">
        <div class="youtube" data-embed="EQW3n5aGdSI" data-fullscreen="true">
            <div class="play-button"></div>
        </div>
    </div>
    ```

    To disable fullscreen, either remove attribute "data-fullscreen" or set it to false <code>data-fullscreen="false"</code>

3.  Use the following style:

    <pre>

    .wrapper {
        max-width: 680px;
        margin: 60px auto;
        padding: 0 20px;
    }

    .youtube {
        background-color: #000;
        margin-bottom: 30px;
        position: relative;
        padding-top: 56.25%;
        overflow: hidden;
        cursor: pointer;
    }
    .youtube img {
        width: 100%;
        top: -16.82%;
        left: 0;
        opacity: 0.96;
    }
    .youtube .play-button {
        width: 90px;
        height: 60px;
        background-color: #333;
        box-shadow: 0 0 30px rgba( 0,0,0,0.6 );
        z-index: 1;
        opacity: 0.8;
        border-radius: 6px;
    }
    .youtube .play-button:before {
        content: "";
        border-style: solid;
        border-width: 15px 0 15px 26.0px;
        border-color: transparent transparent transparent #fff;
    }
    .youtube img,
    .youtube .play-button {
        cursor: pointer;
    }
    .youtube img,
    .youtube iframe,
    .youtube .play-button,
    .youtube .play-button:before {
        position: absolute;
    }
    .youtube .play-button,
    .youtube .play-button:before {
        top: 50%;
        left: 50%;
        transform: translate3d( -50%, -50%, 0 );
    }
    .youtube iframe {
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
    }

    </pre>


##  Source

<p>This is the exact copy of the code by <a href="https://codepen.io/tutsplus/">https://codepen.io/tutsplus/</a>. The working example is available
on the <a href="https://codepen.io/tutsplus/pen/RRVRro">Codepen</a>.</p>