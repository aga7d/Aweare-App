import React, {useState} from "react";
import { connect } from "react-redux";
import { selectedGarmentAction } from "../../redux/actions";
const getPath = (name, color) => {
  switch (name) {
    case "dress":
      return (
       <svg xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 61.334 102.505">
    <defs>
        <clipPath id="clip-path">
            <rect width="61.334" height="102.505" fill="none" />
        </clipPath>
    </defs>
    <g id="Group_587" data-name="Group 587" transform="translate(-286 12)">
        <g id="Component_20_6" data-name="Component 20 – 6" transform="translate(286 -12)"
        clipPath="url(#clip-path)">
            <g id="Group_245" data-name="Group 245">
                <path id="Path_164" data-name="Path 164" d="M450.84,464.379a1.657,1.657,0,0,1-1.657-1.657v-9.529c0-4.6,2.088-12.468,4.508-21.58,2.63-9.911,5.612-21.141,5.612-28.022,0-12.662-8.209-32.763-8.29-32.965a1.657,1.657,0,0,1,1.874-2.252c.06.013,6.041,1.233,10.252-.565a1.656,1.656,0,0,1,1.944.489c.081.1,8.212,10.138,15.254,10.138a1.657,1.657,0,1,1,0,3.315c-7.267,0-14.679-7.736-17.063-10.461a22.026,22.026,0,0,1-8.159.723c2.284,6.021,7.5,20.948,7.5,31.58,0,7.314-2.91,18.272-5.723,28.872-2.261,8.517-4.4,16.565-4.4,20.73v9.529A1.657,1.657,0,0,1,450.84,464.379Z"
                transform="translate(-449.183 -367.674)" fill={color} />
            </g>
            <g id="Group_246" data-name="Group 246" transform="translate(29.055 .001)">
                <path id="Path_165" data-name="Path 165" d="M497.6,464.378a1.656,1.656,0,0,1-1.657-1.657v-9.529c0-4.165-2.136-12.213-4.4-20.73-2.814-10.6-5.723-21.558-5.723-28.872,0-10.632,5.219-25.559,7.5-31.58a22.018,22.018,0,0,1-8.122-.711c-2.3,2.776-9.314,10.449-16.566,10.449a1.657,1.657,0,0,1,0-3.315c5.83,0,12.581-7.289,14.689-10.1a1.662,1.662,0,0,1,1.977-.53c4.213,1.8,10.194.58,10.252.565a1.657,1.657,0,0,1,1.874,2.252c-.083.2-8.29,20.3-8.29,32.965,0,6.881,2.982,18.111,5.612,28.022,2.418,9.112,4.508,16.981,4.508,21.58v9.529A1.657,1.657,0,0,1,497.6,464.378Z"
                transform="translate(-466.981 -367.675)" fill={color} />
            </g>
            <g id="Group_247" data-name="Group 247" transform="translate(10.909 43.011)">
                <path id="Path_166" data-name="Path 166" d="M475.651,403.11a27.5,27.5,0,0,1-19.51-8.069.829.829,0,0,1,1.172-1.172,25.965,25.965,0,0,0,36.674,0,.829.829,0,0,1,1.172,1.172A27.5,27.5,0,0,1,475.651,403.11Z"
                transform="translate(-455.899 -393.627)" fill={color} />
            </g>
            <g id="Group_248" data-name="Group 248" transform="translate(0 93.39)">
                <path id="Path_167" data-name="Path 167" d="M456.641,433.14a7.466,7.466,0,0,1-7.458-7.458,1.657,1.657,0,0,1,3.315,0,4.143,4.143,0,1,0,8.286,0,1.657,1.657,0,0,1,3.315,0A7.466,7.466,0,0,1,456.641,433.14Z"
                transform="translate(-449.183 -424.025)" fill={color} />
            </g>
            <g id="Group_249" data-name="Group 249" transform="translate(11.492 93.39)">
                <path id="Path_168" data-name="Path 168" d="M463.641,433.14a7.466,7.466,0,0,1-7.458-7.458,1.657,1.657,0,0,1,3.315,0,4.143,4.143,0,1,0,8.286,0,1.657,1.657,0,0,1,3.315,0A7.466,7.466,0,0,1,463.641,433.14Z"
                transform="translate(-456.183 -424.025)" fill={color} />
            </g>
            <g id="Group_250" data-name="Group 250" transform="translate(23.435 93.39)">
                <path id="Path_169" data-name="Path 169" d="M470.916,433.14a7.465,7.465,0,0,1-7.458-7.458,1.657,1.657,0,0,1,3.315,0,4.143,4.143,0,1,0,8.286,0,1.657,1.657,0,1,1,3.315,0A7.466,7.466,0,0,1,470.916,433.14Z"
                transform="translate(-463.458 -424.025)" fill={color} />
            </g>
            <g id="Group_251" data-name="Group 251" transform="translate(34.927 93.39)">
                <path id="Path_170" data-name="Path 170" d="M477.916,433.14a7.465,7.465,0,0,1-7.458-7.458,1.657,1.657,0,1,1,3.315,0,4.143,4.143,0,1,0,8.287,0,1.657,1.657,0,1,1,3.315,0A7.466,7.466,0,0,1,477.916,433.14Z"
                transform="translate(-470.458 -424.025)" fill={color} />
            </g>
            <g id="Group_252" data-name="Group 252" transform="translate(46.419 93.39)">
                <path id="Path_171" data-name="Path 171" d="M484.916,433.14a7.465,7.465,0,0,1-7.458-7.458,1.657,1.657,0,1,1,3.315,0,4.143,4.143,0,1,0,8.286,0,1.657,1.657,0,0,1,3.315,0A7.466,7.466,0,0,1,484.916,433.14Z"
                transform="translate(-477.458 -424.025)" fill={color} />
            </g>
        </g>
    </g>
</svg>
      );
      case "tshirt":
        return (
            <svg xmlns="http://www.w3.org/2000/svg" 
viewBox="0 0 112.302 102.983">
    <defs>
        <clipPath id="clip-path">
            <rect width="112.302" height="102.983" fill="none" />
        </clipPath>
    </defs>
    <g id="Group_585" data-name="Group 585" transform="translate(-247 208)">
        <g id="Component_22_6" data-name="Component 22 – 6" transform="translate(247 -208)"
        clipPath="url(#clip-path)">
            <g id="Group_236" data-name="Group 236">
                <path id="Path_157" data-name="Path 157" d="M308.347,258.3H254.956c-4.771,0-4.771-4.3-4.771-6.359l1.519-63.165-6.4,2.586a3.39,3.39,0,0,1-2,.633c-2.011,0-3.739-1.618-5-2.8l-9.533-9.343c-1.383-1.3-4.66-4.362-1.993-6.859l12.976-14.027c.63-.644,4.312-3.649,18.786-3.649h7.39a2.04,2.04,0,0,1,1.843,1.108c1.8,3.678,7.722,13.222,13.49,13.222a2.237,2.237,0,0,1,.338.026c.018,0,.156.013.365.013,1.918,0,8.561-.949,13.522-13.15a2.025,2.025,0,0,1,1.894-1.22h7.39c14.476,0,18.156,3.005,18.747,3.608L336.627,173.1c1.926,1.794,1.926,3-.081,4.879l-13.529,13.082a3.868,3.868,0,0,1-2.694,1.448,3.417,3.417,0,0,1-2.394-1.169l-6.329-2.558L313.12,251.9C313.12,254.007,313.12,258.3,308.347,258.3Zm-53.826-3.829a2.055,2.055,0,0,0,.435.04h53.391a1.239,1.239,0,0,0,.46-.057,7.257,7.257,0,0,0,.263-2.513l-1.59-66.034a1.87,1.87,0,0,1,.893-1.614,2.153,2.153,0,0,1,1.934-.167L319.888,188a2.118,2.118,0,0,1,.417.227l13.182-12.745-12.994-14.033,0,0c-.032,0-3.253-2.342-15.728-2.342h-6.015c-5.873,13.311-14.292,14.37-16.791,14.37a7.892,7.892,0,0,1-.847-.042c-8.147-.123-14.49-10.647-16.461-14.329h-6.118c-12.706,0-15.813,2.431-15.843,2.454l-12.749,13.79a12.231,12.231,0,0,0,1.7,1.836l9.537,9.347a12.1,12.1,0,0,0,1.971,1.592,1.83,1.83,0,0,1,.261-.129L253,184.128a2.135,2.135,0,0,1,1.934.167,1.87,1.87,0,0,1,.893,1.614l-1.592,66.076a6.828,6.828,0,0,0,.286,2.488Z"
                transform="translate(-225.76 -155.319)" fill={color} />
            </g>
            <g id="Group_237" data-name="Group 237" transform="translate(40.081 4.05)">
                <path id="Path_158" data-name="Path 158" d="M245.551,157.319" transform="translate(-245.551 -157.319)"
                fill="none" stroke={color} strokeMiterlimit="10" strokeWidth="2" />
            </g>
            <g id="Group_238" data-name="Group 238" transform="translate(40.106 .622)">
                <path id="Path_159" data-name="Path 159" d="M262.291,159.776a63.339,63.339,0,0,1-16.728-2.21l.583-1.94c.158.047,15.975,4.692,30.939,0l.606,1.932A51.71,51.71,0,0,1,262.291,159.776Z"
                transform="translate(-245.563 -155.626)" fill={color} />
            </g>
        </g>
    </g>
</svg>
       )
    case "jacket":
      return (
      <svg xmlns="http://www.w3.org/2000/svg" 
viewBox="0 0 109.23 93.923">
    <defs>
        <clipPath id="clip-path">
            <rect width="109.23" height="93.923" fill="none" />
        </clipPath>
    </defs>
    <g id="Group_588" data-name="Group 588" transform="translate(-440 328)">
        <g id="Component_19_6" data-name="Component 19 – 6" transform="translate(440 -328)"
        clipPath="url(#clip-path)">
            <g id="Group_192" data-name="Group 192" transform="translate(26.852 25.148)">
                <path id="Path_144" data-name="Path 144" d="M263.113,344.629H239.629c-1.953,0-4.28-.977-4.28-5.633l2.451-61.64a1.566,1.566,0,0,1,3.129.124l-2.449,61.577c0,2.44.611,2.44,1.149,2.44h23.484a1.566,1.566,0,0,1,0,3.132Z"
                transform="translate(-235.349 -275.854)" fill={color} />
            </g>
            <g id="Group_193" data-name="Group 193">
                <path id="Path_145" data-name="Path 145" d="M233.86,343.118a5.753,5.753,0,0,1-1.232-.142l-11.185-1.63a3.7,3.7,0,0,1-3.072-2.231,6.134,6.134,0,0,1,.155-3.287l14.22-63.351a1.446,1.446,0,0,1,.08-.254c3.2-7.75,17.928-10.825,20.182-11.062l7.91-1.344a1.56,1.56,0,0,1,.955.139c.058.028,5.742,2.806,10.946,2.806v3.132c-5.077,0-10.283-2.188-11.862-2.908l-7.468,1.27a1.546,1.546,0,0,1-.257.022c-1.967.136-14.936,3.281-17.462,9.023L221.582,336.51a7.9,7.9,0,0,0-.246,1.577c.038,0,.236.083.67.18l11.187,1.629c.9.2,1.3.282,1.748-1.751l12.695-52.371,3.043.737-12.689,52.341C237.363,341.682,235.974,343.118,233.86,343.118Z"
                transform="translate(-218.201 -259.795)" fill={color} />
            </g>
            <g id="Group_194" data-name="Group 194" transform="translate(54.616 92.357)">
                <path id="Path_146" data-name="Path 146" d="M253.079,318.774" transform="translate(-253.079 -318.774)"
                fill="none" stroke={color} strokeMiterlimit="10" strokeWidth="0.5" />
            </g>
            <g id="Group_195" data-name="Group 195" transform="translate(54.616 92.357)">
                <path id="Path_147" data-name="Path 147" d="M253.079,318.774" transform="translate(-253.079 -318.774)"
                fill="none" stroke={color} strokeMiterlimit="10" strokeWidth="0.5" />
            </g>
            <g id="Group_196" data-name="Group 196" transform="translate(53.05 25.147)">
                <path id="Path_148" data-name="Path 148" d="M277.129,344.63H253.645a1.566,1.566,0,1,1,0-3.132h23.484c.537,0,1.146,0,1.146-2.5l-2.446-61.516a1.566,1.566,0,0,1,3.129-.124l2.448,61.577C281.407,343.652,279.08,344.63,277.129,344.63Z"
                transform="translate(-252.079 -275.854)" fill={color} />
            </g>
            <g id="Group_197" data-name="Group 197" transform="translate(54.616)">
                <path id="Path_149" data-name="Path 149" d="M292,343.132c-2.062,0-3.461-1.441-4.1-4.311l-12.681-52.31,3.044-.737,12.687,52.341c.459,2.061.85,1.976,1.643,1.8L304,338.245a1.662,1.662,0,0,0,.628-.232c-.011-.138-.224-1.1-.315-1.508l-14.186-63.2c-2.527-5.742-15.5-8.887-17.5-9.023-.052,0-.164-.014-.216-.022l-7.468-1.27c-1.577.72-6.785,2.908-11.86,2.908v-3.132c5.222,0,10.886-2.778,10.943-2.806a1.581,1.581,0,0,1,.958-.139l7.91,1.344c2.252.236,16.983,3.312,20.182,11.06a1.5,1.5,0,0,1,.08.255l14.219,63.348a6.147,6.147,0,0,1,.155,3.29,3.63,3.63,0,0,1-2.96,2.211L293.154,343A5.418,5.418,0,0,1,292,343.132Z"
                transform="translate(-253.079 -259.795)" fill={color} />
            </g>
            <g id="Group_198" data-name="Group 198" transform="translate(54.616 92.357)">
                <path id="Path_150" data-name="Path 150" d="M253.079,318.774" transform="translate(-253.079 -318.774)"
                fill="none" stroke={color} strokeMiterlimit="10" strokeWidth="0.5" />
            </g>
            <g id="Group_199" data-name="Group 199" transform="translate(54.616 92.357)">
                <path id="Path_151" data-name="Path 151" d="M253.079,318.774" transform="translate(-253.079 -318.774)"
                fill="none" stroke={color} strokeMiterlimit="10" strokeWidth="0.5" />
            </g>
            <g id="Group_200" data-name="Group 200" transform="translate(53.832 5.606)">
                <rect id="Rectangle_27" data-name="Rectangle 27" width="1.566" height="85.419"
                fill={color} />
            </g>
            <g id="Group_201" data-name="Group 201" transform="translate(61.684 22.811)">
                <path id="Path_152" data-name="Path 152" d="M261.1,275.928h-2.726a.783.783,0,1,1,0-1.566H261.1a.783.783,0,1,1,0,1.566Z"
                transform="translate(-257.593 -274.362)" fill={color} />
            </g>
            <g id="Group_202" data-name="Group 202" transform="translate(66.91 22.811)">
                <path id="Path_153" data-name="Path 153" d="M264.438,275.928h-2.725a.783.783,0,0,1,0-1.566h2.725a.783.783,0,1,1,0,1.566Z"
                transform="translate(-260.93 -274.362)" fill={color} />
            </g>
            <g id="Group_203" data-name="Group 203" transform="translate(36.37 64.314)">
                <path id="Path_154" data-name="Path 154" d="M242.21,317.04a.783.783,0,0,1-.2-1.539c.1-.031,4.568-1.564,4.568-13.852a.783.783,0,0,1,1.566,0c0,13.769-5.5,15.31-5.739,15.368A.806.806,0,0,1,242.21,317.04Z"
                transform="translate(-241.427 -300.866)" fill={color} />
            </g>
            <g id="Group_204" data-name="Group 204" transform="translate(65.14 64.314)">
                <path id="Path_155" data-name="Path 155" d="M265.73,317.04a.784.784,0,0,1-.189-.023c-.235-.058-5.741-1.6-5.741-15.368a.783.783,0,0,1,1.566,0c0,12.368,4.524,13.84,4.571,13.854a.79.79,0,0,1,.542.958A.779.779,0,0,1,265.73,317.04Z"
                transform="translate(-259.8 -300.866)" fill={color} />
            </g>
            <g id="Group_205" data-name="Group 205" transform="translate(33.694 87.34)">
                <rect id="Rectangle_28" data-name="Rectangle 28" width="0.783" height="3.685"
                fill={color} />
            </g>
            <g id="Group_206" data-name="Group 206" transform="translate(30.562 87.34)">
                <rect id="Rectangle_29" data-name="Rectangle 29" width="0.783" height="3.685"
                fill={color} />
            </g>
            <g id="Group_207" data-name="Group 207" transform="translate(36.761 87.34)">
                <rect id="Rectangle_30" data-name="Rectangle 30" width="0.783" height="3.685"
                fill={color} />
            </g>
            <g id="Group_208" data-name="Group 208" transform="translate(39.86 87.34)">
                <rect id="Rectangle_31" data-name="Rectangle 31" width="0.783" height="3.685"
                fill={color} />
            </g>
            <g id="Group_209" data-name="Group 209" transform="translate(42.502 87.34)">
                <rect id="Rectangle_32" data-name="Rectangle 32" width="0.783" height="3.685"
                fill={color} />
            </g>
            <g id="Group_210" data-name="Group 210" transform="translate(4.772 75.502)">
                <rect id="Rectangle_33" data-name="Rectangle 33" width="3.684" height="0.783"
                transform="rotate(-79.66 2.173 1.812)" fill={color} />
            </g>
            <g id="Group_211" data-name="Group 211" transform="translate(6.987 75.502)">
                <rect id="Rectangle_34" data-name="Rectangle 34" width="3.684" height="0.783"
                transform="rotate(-79.66 2.173 1.812)" fill={color} />
            </g>
            <g id="Group_212" data-name="Group 212" transform="translate(9.086 75.807)">
                <rect id="Rectangle_35" data-name="Rectangle 35" width="3.684" height="0.783"
                transform="rotate(-79.649 2.173 1.812)" fill={color} />
            </g>
            <g id="Group_213" data-name="Group 213" transform="translate(11.187 76.084)">
                <rect id="Rectangle_36" data-name="Rectangle 36" width="3.684" height="0.783"
                transform="rotate(-79.66 2.173 1.812)" fill={color} />
            </g>
            <g id="Group_214" data-name="Group 214" transform="translate(13.213 76.48)">
                <rect id="Rectangle_37" data-name="Rectangle 37" width="3.684" height="0.783"
                transform="rotate(-79.647 2.173 1.812)" fill={color} />
            </g>
            <g id="Group_215" data-name="Group 215" transform="translate(45.438 87.34)">
                <rect id="Rectangle_38" data-name="Rectangle 38" width="0.783" height="3.685"
                fill={color} />
            </g>
            <g id="Group_216" data-name="Group 216" transform="translate(48.668 87.34)">
                <rect id="Rectangle_39" data-name="Rectangle 39" width="0.783" height="3.685"
                fill={color} />
            </g>
            <g id="Group_217" data-name="Group 217" transform="translate(51.408 87.34)">
                <rect id="Rectangle_40" data-name="Rectangle 40" width="0.783" height="3.685"
                fill={color} />
            </g>
            <g id="Group_218" data-name="Group 218" transform="translate(57.379 87.34)">
                <rect id="Rectangle_41" data-name="Rectangle 41" width="0.783" height="3.685"
                fill={color} />
            </g>
            <g id="Group_219" data-name="Group 219" transform="translate(59.743 87.34)">
                <rect id="Rectangle_42" data-name="Rectangle 42" width="0.783" height="3.685"
                fill={color} />
            </g>
            <g id="Group_220" data-name="Group 220" transform="translate(62.841 87.34)">
                <rect id="Rectangle_43" data-name="Rectangle 43" width="0.783" height="3.685"
                fill={color} />
            </g>
            <g id="Group_221" data-name="Group 221" transform="translate(65.483 87.34)">
                <rect id="Rectangle_44" data-name="Rectangle 44" width="0.783" height="3.685"
                fill={color} />
            </g>
            <g id="Group_222" data-name="Group 222" transform="translate(68.419 87.34)">
                <rect id="Rectangle_45" data-name="Rectangle 45" width="0.783" height="3.685"
                fill={color} />
            </g>
            <g id="Group_223" data-name="Group 223" transform="translate(71.649 87.34)">
                <rect id="Rectangle_46" data-name="Rectangle 46" width="0.783" height="3.685"
                fill={color} />
            </g>
            <g id="Group_224" data-name="Group 224" transform="translate(74.39 87.34)">
                <rect id="Rectangle_47" data-name="Rectangle 47" width="0.783" height="3.685"
                fill={color} />
            </g>
            <g id="Group_225" data-name="Group 225" transform="translate(77.521 87.34)">
                <rect id="Rectangle_48" data-name="Rectangle 48" width="0.783" height="3.685"
                fill={color} />
            </g>
            <g id="Group_226" data-name="Group 226" transform="translate(28.537 86.557)">
                <rect id="Rectangle_49" data-name="Rectangle 49" width="52.275" height="1.566"
                fill={color} />
            </g>
            <g id="Group_227" data-name="Group 227" transform="translate(2.171 73.624)">
                <rect id="Rectangle_50" data-name="Rectangle 50" width="1.566" height="15.879"
                transform="rotate(-80.795 .908 .773)" fill={color} />
            </g>
            <g id="Group_228" data-name="Group 228" transform="translate(102.783 75.6)">
                <rect id="Rectangle_51" data-name="Rectangle 51" width="0.783" height="3.684"
                transform="rotate(-10.353 .778 .07)" fill={color} />
            </g>
            <g id="Group_229" data-name="Group 229" transform="translate(100.568 75.601)">
                <rect id="Rectangle_52" data-name="Rectangle 52" width="0.783" height="3.684"
                transform="rotate(-10.331 .78 .07)" fill={color} />
            </g>
            <g id="Group_230" data-name="Group 230" transform="translate(98.469 75.906)">
                <rect id="Rectangle_53" data-name="Rectangle 53" width="0.783" height="3.684"
                transform="rotate(-10.352 .778 .07)" fill={color} />
            </g>
            <g id="Group_231" data-name="Group 231" transform="translate(96.368 76.183)">
                <rect id="Rectangle_54" data-name="Rectangle 54" width="0.783" height="3.684"
                transform="matrix(.984 -.18 .18 .984 0 .141)" fill={color} />
            </g>
            <g id="Group_232" data-name="Group 232" transform="translate(94.342 76.578)">
                <rect id="Rectangle_55" data-name="Rectangle 55" width="0.783" height="3.684"
                transform="rotate(-10.353 .778 .07)" fill={color} />
            </g>
            <g id="Group_233" data-name="Group 233" transform="translate(90.892 73.721)">
                <rect id="Rectangle_56" data-name="Rectangle 56" width="15.879" height="1.566"
                transform="rotate(-9.217 15.774 1.271)" fill={color} />
            </g>
            <g id="Group_234" data-name="Group 234" transform="translate(53.803 4.732)">
                <path id="Path_156" data-name="Path 156" d="M257,269.9a2.621,2.621,0,0,1-1.868-.775l-.175-.265-2.4-6.044,6.309,2.573A2.643,2.643,0,0,1,257,269.9Zm-.656-1.788a1.1,1.1,0,0,0,1.417-.094,1.078,1.078,0,0,0,.092-1.416l-2.5-.994Z"
                transform="translate(-252.56 -262.817)" fill={color} />
            </g>
        </g>
    </g>
</svg>
      );
    case "shirt":
      return (
       <svg xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 112.761 103.277">
    <defs>
        <clipPath id="clip-path">
            <rect width="112.761" height="103.277" fill="none" />
        </clipPath>
    </defs>
    <g id="Group_583" data-name="Group 583" transform="translate(-5546 -859)">
        <g id="Component_24_7" data-name="Component 24 – 7" transform="translate(5546 859)"
        clipPath="url(#clip-path)">
            <g id="Group_167" data-name="Group 167" transform="translate(27.721 33.001)">
                <path id="Path_124" data-name="Path 124" d="M156.2,350.12h-23.9c-2.129,0-4.667-1.067-4.667-6.144l1.06-62.453a1.732,1.732,0,0,1,1.738-1.679,1.707,1.707,0,0,1,1.677,1.737L131.043,344c0,2.7.666,2.7,1.252,2.7h23.9a1.708,1.708,0,0,1,0,3.415Z"
                transform="translate(-127.628 -279.844)" fill={color} />
            </g>
            <g id="Group_168" data-name="Group 168" transform="translate(0 6.082)">
                <path id="Path_125" data-name="Path 125" d="M125.134,354.837a6.273,6.273,0,0,1-1.344-.155l-8.875-1.795c-4.211-.931-3.536-3.98-3.091-6L124,277.526c3.494-8.461,19.592-11.812,22.017-12.063l8.665-1.361a1.707,1.707,0,1,1,.529,3.373l-8.957,1.388c-2.141.149-16.236,3.566-19.026,9.805l-12.058,68.883a9.146,9.146,0,0,0-.282,1.8c.046,0,.248.089.731.195l8.876,1.793c.885.2,1.318.294,1.813-1.928L140.156,292.3a1.707,1.707,0,0,1,3.318.806l-13.835,57.074C128.953,353.271,127.438,354.837,125.134,354.837Z"
                transform="translate(-111.492 -264.08)" fill={color} />
            </g>
            <g id="Group_169" data-name="Group 169" transform="translate(56.372 101.57)">
                <path id="Path_126" data-name="Path 126" d="M144.359,320" transform="translate(-144.359 -319.998)"
                fill="none" stroke={color} strokeMiterlimit="10" strokeWidth="2" />
            </g>
            <g id="Group_170" data-name="Group 170" transform="translate(56.372 101.57)">
                <path id="Path_127" data-name="Path 127" d="M144.359,320" transform="translate(-144.359 -319.998)"
                fill="none" stroke={color} strokeMiterlimit="10" strokeWidth="2" />
            </g>
            <g id="Group_171" data-name="Group 171" transform="translate(54.745 33.002)">
                <path id="Path_128" data-name="Path 128" d="M168.968,350.12h-23.9a1.708,1.708,0,1,1,0-3.415h23.9c.586,0,1.248,0,1.248-2.729l-2.763-62.347a1.708,1.708,0,1,1,3.412-.152L173.63,343.9C173.632,349.053,171.1,350.12,168.968,350.12Z"
                transform="translate(-143.359 -279.844)" fill={color} />
            </g>
            <g id="Group_172" data-name="Group 172" transform="translate(68.231 5.995)">
                <path id="Path_129" data-name="Path 129" d="M182.019,354.879c-2.293,0-3.811-1.571-4.5-4.691l-15.524-57,3.3-.9,15.543,57.076c.511,2.3.937,2.2,1.8,2.013l8.938-1.807a2.112,2.112,0,0,0,.774-.268c-.012-.15-.244-1.2-.343-1.646L179.933,278.7c-2.794-6.24-16.887-9.657-19.073-9.805l-.212-.019-9.489-1.477.526-3.374,9.455,1.47c2.423.249,18.523,3.6,22.018,12.063l.1.357L195.349,347a6.536,6.536,0,0,1,.155,3.509,3.956,3.956,0,0,1-3.227,2.411l-8.938,1.8A6.067,6.067,0,0,1,182.019,354.879Z"
                transform="translate(-151.159 -264.029)" fill={color} />
            </g>
            <g id="Group_173" data-name="Group 173" transform="translate(56.372 101.57)">
                <path id="Path_130" data-name="Path 130" d="M144.359,320" transform="translate(-144.359 -319.998)"
                fill="none" stroke={color} strokeMiterlimit="10" strokeWidth="2" />
            </g>
            <g id="Group_174" data-name="Group 174" transform="translate(56.372 101.57)">
                <path id="Path_131" data-name="Path 131" d="M144.359,320" transform="translate(-144.359 -319.998)"
                fill="none" stroke={color} strokeMiterlimit="10" strokeWidth="2" />
            </g>
            <g id="Group_175" data-name="Group 175" transform="translate(51.994 16.285)">
                <rect id="Rectangle_23" data-name="Rectangle 23" width="1.708" height="83.831"
                fill={color} />
            </g>
            <g id="Group_176" data-name="Group 176" transform="translate(58.999 16.285)">
                <rect id="Rectangle_24" data-name="Rectangle 24" width="1.708" height="83.831"
                fill={color} />
            </g>
            <g id="Group_177" data-name="Group 177" transform="translate(55.255 20.411)">
                <path id="Path_132" data-name="Path 132" d="M145.875,273.557a1.085,1.085,0,1,1-1.086-1.086A1.086,1.086,0,0,1,145.875,273.557Z"
                transform="translate(-143.705 -272.471)" fill={color} />
            </g>
            <g id="Group_178" data-name="Group 178" transform="translate(55.255 37.489)">
                <path id="Path_133" data-name="Path 133" d="M145.875,283.558a1.085,1.085,0,1,1-1.086-1.086A1.086,1.086,0,0,1,145.875,283.558Z"
                transform="translate(-143.705 -282.472)" fill={color} />
            </g>
            <g id="Group_179" data-name="Group 179" transform="translate(55.255 54.567)">
                <path id="Path_134" data-name="Path 134" d="M145.875,293.559a1.085,1.085,0,1,1-1.086-1.086A1.086,1.086,0,0,1,145.875,293.559Z"
                transform="translate(-143.705 -292.473)" fill={color} />
            </g>
            <g id="Group_180" data-name="Group 180" transform="translate(55.255 71.645)">
                <path id="Path_135" data-name="Path 135" d="M145.875,303.56a1.085,1.085,0,1,1-1.086-1.086A1.086,1.086,0,0,1,145.875,303.56Z"
                transform="translate(-143.705 -302.474)" fill={color} />
            </g>
            <g id="Group_181" data-name="Group 181" transform="translate(55.255 88.723)">
                <path id="Path_136" data-name="Path 136" d="M145.875,313.561a1.085,1.085,0,1,1-1.086-1.086A1.086,1.086,0,0,1,145.875,313.561Z"
                transform="translate(-143.705 -312.475)" fill={color} />
            </g>
            <g id="Group_182" data-name="Group 182" transform="translate(49.252 3.147)">
                <path id="Path_137" data-name="Path 137" d="M147.677,264.357c-4.221,0-7.44-.292-7.488-.3l.157-1.7a87.307,87.307,0,0,0,14.037,0l.159,1.7C152.185,264.284,149.8,264.357,147.677,264.357Z"
                transform="translate(-140.189 -262.361)" fill={color} />
            </g>
            <g id="Group_183" data-name="Group 183" transform="translate(47.943 .003)">
                <path id="Path_138" data-name="Path 138" d="M148.081,262.588c-4.991,0-8.6-.364-8.658-.369l.174-1.7a96.29,96.29,0,0,0,16.626,0l.161,1.7C153.453,262.5,150.591,262.588,148.081,262.588Z"
                transform="translate(-139.423 -260.52)" fill={color} />
            </g>
            <g id="Group_184" data-name="Group 184" transform="translate(43.291)">
                <path id="Path_139" data-name="Path 139" d="M144.028,278.714a.85.85,0,0,1-.369-.084c-.19-.091-4.653-2.333-6.924-13.166a.857.857,0,0,1,.222-.77l3.8-3.919a.856.856,0,0,1,1.446.408c.017.08,1.887,8.091,8.016,12.208a.855.855,0,0,1-.007,1.422l-5.717,3.76A.867.867,0,0,1,144.028,278.714ZM138.5,265.557c1.7,7.724,4.515,10.5,5.528,11.281l4.218-2.773a23.553,23.553,0,0,1-7.29-11.038Z"
                transform="translate(-136.716 -260.518)" fill={color} />
            </g>
            <g id="Group_185" data-name="Group 185" transform="translate(55.569)">
                <path id="Path_140" data-name="Path 140" d="M150.44,278.714a.863.863,0,0,1-.47-.14l-5.715-3.762a.853.853,0,0,1-.007-1.421c6.129-4.117,8-12.128,8.016-12.208a.856.856,0,0,1,1.446-.408l3.8,3.919a.853.853,0,0,1,.224.77c-2.269,10.833-6.737,13.075-6.924,13.166A.85.85,0,0,1,150.44,278.714Zm-4.216-4.65,4.216,2.773c1.013-.779,3.827-3.557,5.528-11.281l-2.454-2.531A23.567,23.567,0,0,1,146.224,274.064Z"
                transform="translate(-143.871 -260.518)" fill={color} />
            </g>
            <g id="Group_186" data-name="Group 186" transform="translate(5.06 87.388)">
                <path id="Path_141" data-name="Path 141" d="M116.625,312.779a1.085,1.085,0,1,1-1.086-1.086A1.086,1.086,0,0,1,116.625,312.779Z"
                transform="translate(-114.455 -311.693)" fill={color} />
            </g>
            <g id="Group_187" data-name="Group 187" transform="translate(105.238 87.637)">
                <path id="Path_142" data-name="Path 142" d="M175,312.925a1.085,1.085,0,1,1-1.086-1.086A1.085,1.085,0,0,1,175,312.925Z"
                transform="translate(-172.83 -311.839)" fill={color} />
            </g>
            <g id="Group_188" data-name="Group 188" transform="translate(3.912 82.697)">
                <rect id="Rectangle_25" data-name="Rectangle 25" width="1.707" height="12.706"
                transform="rotate(-79.351 1.011 .839)" fill={color} />
            </g>
            <g id="Group_189" data-name="Group 189" transform="translate(95.587 82.698)">
                <rect id="Rectangle_26" data-name="Rectangle 26" width="12.706" height="1.707"
                transform="matrix(.983 -.185 .185 .983 0 2.346)" fill={color} />
            </g>
            <g id="Group_190" data-name="Group 190" transform="translate(64.904 30.457)">
                <path id="Path_143" data-name="Path 143" d="M156.435,280.062h-6.26a.854.854,0,1,1,0-1.708h6.26a.854.854,0,0,1,0,1.708Z"
                transform="translate(-149.321 -278.354)" fill={color} />
            </g>
        </g>
    </g>
</svg>
      );
    case "shorts":
      return (
        <svg id="shorts" xmlns="http://www.w3.org/2000/svg" 
viewBox="0 0 77.712 98.593">
    <defs>
        <clipPath id="clip-path">
            <rect width="77.712" height="68.593" fill="none" />
        </clipPath>
    </defs>
    <g id="Group_584" data-name="Group 584" transform="translate(-17 143)">
        <g id="Component_23_6" data-name="Component 23 – 6" transform="translate(17 -143)"
        clipPath="url(#clip-path)">
            <g id="Group_38" data-name="Group 38">
                <path id="Path_27" data-name="Path 27" d="M292.975,448.625c-15.96,0-16.528-.569-17.127-1.173-.422-.428-1.031-1.046-5.61-22.5-2.051,11.051-3.965,21.271-4.112,21.738-.49,1.54-.579,1.815-17.992,1.815-15.229,0-15.395-.321-16.013-1.521-1.075-2.079,1.67-56.763,3.985-63.531a3.262,3.262,0,0,1,1.561-2.064c2.111-.978,8.734-1.359,23.62-1.359l9.351.017,9.545-.017c18.317,0,22.551.537,23.957,1.529,1.039.731,2.021,1.425,3.934,33.151.679,11.26,1.659,30.8,1.5,31.726C309.275,448.2,309.2,448.625,292.975,448.625Zm-14.393-4.138c1.979.194,7.313.368,14.393.368,6.21,0,10.734-.136,12.84-.3-.266-9.085-2.611-54.1-4.18-60.021-1.921-.469-9.158-.735-21.454-.735l-9.545.017-9.351-.017c-12.227,0-19.491.292-21.629.869-2.1,5.46-4.179,50.455-4.055,59.825,2.028.134,6.387.241,12.531.241,6.956,0,12.384-.132,14.616-.281.813-4.2,3.6-19.214,5.516-29.551a1.886,1.886,0,0,1,1.832-1.542h.021a1.887,1.887,0,0,1,1.848,1.5C274.04,424.817,277.466,440.662,278.582,444.487Z"
                transform="translate(-231.881 -380.032)" fill={color} />
            </g>
            <g id="Group_39" data-name="Group 39" transform="translate(4.077 2.992)">
                <path id="Path_28" data-name="Path 28" d="M234.111,401.923l-.068-1.885c6.594-.239,10.48-13.377,11.421-18.418l1.853.347C247.166,382.765,243.548,401.578,234.111,401.923Z"
                transform="translate(-234.043 -381.619)" fill={color} />
            </g>
            <g id="Group_40" data-name="Group 40" transform="translate(60.403 2.992)">
                <path id="Path_29" data-name="Path 29" d="M277.125,401.923c-9.437-.345-13.053-19.157-13.2-19.957l1.853-.347c.034.181,3.482,18.128,11.419,18.418Z"
                transform="translate(-263.921 -381.619)" fill={color} />
            </g>
            <g id="Group_41" data-name="Group 41" transform="translate(36.671 1.735)">
                <rect id="Rectangle_5" data-name="Rectangle 5" width="1.885" height="33.462"
                transform="rotate(-.738 1.863 .012)" fill={color} />
            </g>
            <g id="Group_42" data-name="Group 42" transform="translate(40.239 6.711)">
                <path id="Path_30" data-name="Path 30" d="M256.258,385.108a1.519,1.519,0,0,1-1.521,1.518h0a1.513,1.513,0,0,1-1.512-1.518h0a1.513,1.513,0,0,1,1.512-1.516h0a1.518,1.518,0,0,1,1.521,1.516Z"
                transform="translate(-253.225 -383.592)" fill={color} />
            </g>
            <g id="Group_43" data-name="Group 43" transform="translate(1.87 58.679)">
                <rect id="Rectangle_6" data-name="Rectangle 6" width="31.476" height="1.885"
                fill={color} />
            </g>
            <g id="Group_44" data-name="Group 44" transform="translate(43.273 58.679)">
                <rect id="Rectangle_7" data-name="Rectangle 7" width="31.474" height="1.885"
                fill={color} />
            </g>
        </g>
    </g>
</svg>
      );
    case "pants":
      return (
       <svg xmlns="http://www.w3.org/2000/svg" 
viewBox="0 0 66.005 103.097">
    <defs>
        <clipPath id="clip-path">
            <rect width="66.005" height="103.097" fill="none" />
        </clipPath>
    </defs>
    <g id="Group_586" data-name="Group 586" transform="translate(-298 57)">
        <g id="Component_21_6" data-name="Component 21 – 6" transform="translate(298 -57)"
        clipPath="url(#clip-path)">
            <g id="Group_95" data-name="Group 95">
                <path id="Path_72" data-name="Path 72" d="M177.931,470.668c-12.507,0-13.036-.531-13.547-1.045-.484-.49-1.025-1.04-6.7-54.062-5.116,52.752-5.254,53.188-5.316,53.385-.427,1.34-.516,1.617-14.239,1.617-12,0-12.16-.314-12.7-1.355-.653-1.263-.131-46.714-.124-47.174.378-31.16,1.132-48.6,2.237-51.83a2.327,2.327,0,0,1,1.149-1.424c1.881-.87,7.781-1.209,21.043-1.209l8.33.015,8.5-.015c16.318,0,20.092.477,21.345,1.36,1.023.722,1.831,1.292,2.665,50.6.339,19.926.626,48.427.5,49.186C190.811,470.256,190.741,470.668,177.931,470.668Zm-10.954-3.66c1.7.161,5.727.3,10.954.3,4.716,0,8.193-.114,9.852-.25.109-11.08-.872-87.392-2.209-95.5-1.858-.4-8.267-.63-19.009-.63l-8.5.015-8.33-.015c-10.635,0-17.057.249-19.126.739-1.826,7.618-2.5,83.787-2.093,95.332,1.5.1,4.59.2,9.612.2,5.159,0,9.263-.108,11.118-.232.786-7.383,4.614-46.753,6.686-68.193a1.681,1.681,0,0,1,1.664-1.517h.008a1.678,1.678,0,0,1,1.669,1.5C161.9,423.615,165.939,460.616,166.977,467.008Z"
                transform="translate(-125.1 -367.571)" fill={color} />
            </g>
            <g id="Group_96" data-name="Group 96" transform="translate(1.367 7.516)">
                <path id="Path_73" data-name="Path 73" d="M129.084,384.661a6.466,6.466,0,0,1-2.675-.563.84.84,0,0,1,.69-1.532c6.449,2.911,16.3-10.053,16.4-10.185a.84.84,0,0,1,1.344,1.009C144.456,373.905,136.279,384.661,129.084,384.661Z"
                transform="translate(-125.914 -372.046)" fill={color} />
            </g>
            <g id="Group_97" data-name="Group 97" transform="translate(44.923 7.516)">
                <path id="Path_74" data-name="Path 74" d="M167.774,384.661c-7.2,0-15.371-10.756-15.759-11.27a.84.84,0,0,1,1.344-1.009c.1.131,9.944,13.1,16.4,10.185a.84.84,0,0,1,.69,1.532A6.46,6.46,0,0,1,167.774,384.661Z"
                transform="translate(-151.847 -372.046)" fill={color} />
            </g>
            <g id="Group_98" data-name="Group 98" transform="translate(31.105 1.545)">
                <rect id="Rectangle_14" data-name="Rectangle 14" width="1.68" height="29.808"
                transform="translate(0 .022)" fill={color} />
            </g>
            <g id="Group_99" data-name="Group 99" transform="translate(33.71 3.782)">
                <path id="Path_75" data-name="Path 75" d="M147.875,371.173a1.355,1.355,0,0,1-1.357,1.354h0a1.35,1.35,0,0,1-1.347-1.354h0a1.35,1.35,0,0,1,1.347-1.35h0a1.354,1.354,0,0,1,1.357,1.35Z"
                transform="translate(-145.171 -369.823)" fill={color} />
            </g>
            <g id="Group_100" data-name="Group 100" transform="translate(3.345 7.008)">
                <rect id="Rectangle_15" data-name="Rectangle 15" width="58.694" height="1.68"
                fill={color} />
            </g>
            <g id="Group_101" data-name="Group 101" transform="translate(13.125 1.767)">
                <path id="Path_76" data-name="Path 76" d="M133.754,375.544a.839.839,0,0,1-.84-.84v-5.242a.84.84,0,0,1,1.68,0V374.7A.84.84,0,0,1,133.754,375.544Z"
                transform="translate(-132.914 -368.623)" fill={color} />
            </g>
            <g id="Group_102" data-name="Group 102" transform="translate(49.444 1.767)">
                <path id="Path_77" data-name="Path 77" d="M155.379,375.544a.839.839,0,0,1-.84-.84v-5.242a.84.84,0,0,1,1.68,0V374.7A.84.84,0,0,1,155.379,375.544Z"
                transform="translate(-154.539 -368.623)" fill={color} />
            </g>
        </g>
    </g>
</svg>
      );
    default:
      return null;
  }
};

const GarmentIcon = (props) => {
  const [color,setColor]= useState("#b97d76");
  return (
    <div onMouseOut={()=>{setColor("#b97d76")}} onMouseOver={()=>{setColor("#e78738")}}  onClick= {()=>{props.selectedGarmentAction(props.score)}}>{getPath(props.name, color)}</div>
      
   
  );
};
const mapDispatchToProps = {
  selectedGarmentAction
};
export default connect(
  null,
  mapDispatchToProps
)(GarmentIcon);
