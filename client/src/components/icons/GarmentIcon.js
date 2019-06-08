import React, {useState} from "react";
import { connect } from "react-redux";
import { selectedGarmentAction } from "../../redux/actions";
const getPath = (name, color) => {
  switch (name) {
    case "dress":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 67.136 111.399">
            <defs>
                <clipPath id="clip-path">
                    <rect width="67.136" height="111.399" fill="none" />
                </clipPath>
            </defs>
            <g id="Group_255" data-name="Group 255">
                <g id="Component_20_2" data-name="Component 20 – 2" clipPath="url(#clip-path)">
                    <g id="Group_245" data-name="Group 245">
                        <path id="Path_164" data-name="Path 164" d="M451.1,472.367a1.858,1.858,0,0,1-1.916-1.794V460.256c0-4.979,2.414-13.5,5.212-23.362,3.041-10.729,6.488-22.887,6.488-30.336,0-13.708-9.49-35.469-9.584-35.688a1.7,1.7,0,0,1,.3-1.83,2,2,0,0,1,1.868-.608c.069.014,6.984,1.335,11.853-.612a2,2,0,0,1,2.247.529c.094.109,9.494,10.975,17.635,10.975a1.8,1.8,0,1,1,0,3.588c-8.4,0-16.971-8.375-19.728-11.325a27.126,27.126,0,0,1-9.433.782c2.64,6.518,8.674,22.679,8.674,34.189,0,7.918-3.365,19.781-6.616,31.257-2.614,9.22-5.083,17.933-5.083,22.442v10.317A1.858,1.858,0,0,1,451.1,472.367Z"
                        transform="translate(-449.183 -367.674)" fill={color} />
                    </g>
                    <g id="Group_246" data-name="Group 246" transform="translate(29.817 .001)">
                        <path id="Path_165" data-name="Path 165" d="M502.384,472.366a1.856,1.856,0,0,1-1.916-1.794V460.255c0-4.509-2.47-13.221-5.083-22.442-3.253-11.476-6.616-23.339-6.616-31.257,0-11.51,6.034-27.67,8.672-34.189a27.115,27.115,0,0,1-9.391-.77c-2.659,3.005-10.768,11.312-19.153,11.312a1.8,1.8,0,1,1,0-3.589c6.741,0,14.545-7.891,16.982-10.93a2,2,0,0,1,2.286-.574c4.871,1.949,11.786.628,11.853.612a2,2,0,0,1,1.868.608,1.7,1.7,0,0,1,.3,1.83c-.1.219-9.584,21.981-9.584,35.688,0,7.45,3.447,19.607,6.488,30.336,2.8,9.865,5.212,18.383,5.212,23.362v10.317A1.858,1.858,0,0,1,502.384,472.366Z"
                        transform="translate(-466.981 -367.675)" fill={color} />
                    </g>
                    <g id="Group_247" data-name="Group 247" transform="translate(10.726 46.438)">
                        <path id="Path_166" data-name="Path 166" d="M478.735,404.591a31.8,31.8,0,0,1-22.556-9.329.958.958,0,1,1,1.355-1.355,30.019,30.019,0,0,0,42.4,0,.958.958,0,1,1,1.355,1.355A31.792,31.792,0,0,1,478.735,404.591Z"
                        transform="translate(-455.899 -393.627)" fill={color} />
                    </g>
                    <g id="Group_248" data-name="Group 248" transform="translate(0 100.86)">
                        <path id="Path_167" data-name="Path 167" d="M457.805,434.563a8.632,8.632,0,0,1-8.622-8.622,1.916,1.916,0,1,1,3.832,0,4.79,4.79,0,0,0,9.58,0,1.916,1.916,0,1,1,3.832,0A8.632,8.632,0,0,1,457.805,434.563Z"
                        transform="translate(-449.183 -424.025)" fill={color} />
                    </g>
                    <g id="Group_249" data-name="Group 249" transform="translate(12.352 100.86)">
                        <path id="Path_168" data-name="Path 168" d="M464.805,434.563a8.632,8.632,0,0,1-8.622-8.622,1.916,1.916,0,1,1,3.832,0,4.79,4.79,0,0,0,9.58,0,1.916,1.916,0,1,1,3.832,0A8.632,8.632,0,0,1,464.805,434.563Z"
                        transform="translate(-456.183 -424.025)" fill={color} />
                    </g>
                    <g id="Group_250" data-name="Group 250" transform="translate(25.188 100.86)">
                        <path id="Path_169" data-name="Path 169" d="M472.08,434.563a8.63,8.63,0,0,1-8.622-8.622,1.916,1.916,0,1,1,3.832,0,4.79,4.79,0,0,0,9.58,0,1.916,1.916,0,1,1,3.832,0A8.632,8.632,0,0,1,472.08,434.563Z"
                        transform="translate(-463.458 -424.025)" fill={color}/>
                    </g>
                    <g id="Group_251" data-name="Group 251" transform="translate(37.54 100.86)">
                        <path id="Path_170" data-name="Path 170" d="M479.08,434.563a8.63,8.63,0,0,1-8.622-8.622,1.916,1.916,0,1,1,3.832,0,4.79,4.79,0,0,0,9.58,0,1.916,1.916,0,1,1,3.832,0A8.632,8.632,0,0,1,479.08,434.563Z"
                        transform="translate(-470.458 -424.025)" fill={color}/>
                    </g>
                    <g id="Group_252" data-name="Group 252" transform="translate(49.891 100.86)">
                        <path id="Path_171" data-name="Path 171" d="M486.08,434.563a8.63,8.63,0,0,1-8.622-8.622,1.916,1.916,0,1,1,3.832,0,4.79,4.79,0,0,0,9.58,0,1.916,1.916,0,1,1,3.832,0A8.632,8.632,0,0,1,486.08,434.563Z"
                        transform="translate(-477.458 -424.025)" fill={color}/>
                    </g>
                </g>
            </g>
        </svg>
      );
      case "tshirt":
        return (<svg xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 112.141 108.578">
            <defs>
                <clipPath id="clip-path">
                    <rect width="112.141" height="108.578" fill="none" />
                </clipPath>
            </defs>
            <g id="Component_22_2" data-name="Component 22 – 2" clipPath="url(#clip-path)">
                <g id="Group_236" data-name="Group 236">
                    <path id="Path_157" data-name="Path 157" d="M308.228,263.9H254.914c-4.764,0-4.764-4.529-4.764-6.7l1.517-66.6-6.391,2.727a3.264,3.264,0,0,1-2,.667c-2.008,0-3.733-1.706-5-2.951l-9.519-9.851c-1.381-1.366-4.653-4.6-1.99-7.232l12.957-14.789c.629-.679,4.306-3.848,18.759-3.848h7.379a2.026,2.026,0,0,1,1.84,1.169c1.794,3.878,7.711,13.94,13.471,13.94a2.115,2.115,0,0,1,.338.028c.018,0,.156.014.364.014,1.915,0,8.548-1,13.5-13.864a2.021,2.021,0,0,1,1.891-1.287h7.38c14.456,0,18.13,3.168,18.721,3.8l13.092,14.939c1.923,1.892,1.923,3.162-.081,5.144L322.878,193c-.847.837-1.547,1.526-2.69,1.526a3.348,3.348,0,0,1-2.39-1.233l-6.32-2.7,1.517,66.551C312.995,259.368,312.995,263.9,308.228,263.9Zm-53.749-4.037a1.949,1.949,0,0,0,.435.042h53.314a1.179,1.179,0,0,0,.459-.06,8.059,8.059,0,0,0,.263-2.649l-1.587-69.621a2,2,0,0,1,.892-1.7,2.051,2.051,0,0,1,1.931-.176l9.568,4.081a2.088,2.088,0,0,1,.417.24l13.163-13.437-12.975-14.8,0,0c-.032,0-3.248-2.469-15.705-2.469h-6.006c-5.865,14.034-14.271,15.151-16.767,15.151a7.47,7.47,0,0,1-.845-.044c-8.136-.13-14.47-11.225-16.437-15.107h-6.109c-12.688,0-15.79,2.563-15.821,2.587l-12.73,14.54a12.653,12.653,0,0,0,1.7,1.936l9.523,9.855a12.227,12.227,0,0,0,1.968,1.678,1.789,1.789,0,0,1,.261-.136l9.568-4.081a2.034,2.034,0,0,1,1.931.176,2,2,0,0,1,.892,1.7l-1.59,69.665a7.576,7.576,0,0,0,.285,2.623Z"
                    transform="translate(-225.76 -155.319)" fill={color}/>
                </g>
                <g id="Group_237" data-name="Group 237" transform="translate(40.024 2.697)">
                    <path id="Path_158" data-name="Path 158" d="M245.551,157.319" transform="translate(-245.551 -157.319)"
                    fill={color}stroke="#231f20" strokeMiterlimit="10" strokeWidth="2" />
                </g>
                <g id="Group_238" data-name="Group 238" transform="translate(45.394 .414)">
                    <path id="Path_159" data-name="Path 159" d="M256.7,158.389a42.179,42.179,0,0,1-11.14-1.471l.388-1.292c.105.031,10.638,3.125,20.6,0l.4,1.287A34.435,34.435,0,0,1,256.7,158.389Z"
                    transform="translate(-245.563 -155.626)" fill={color}/>
                </g>
            </g>
        </svg>)
    case "jacket":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 123.877 111.708">
            <defs>
                <clipPath id="clip-path">
                    <rect width="123.877" height="111.708" fill="none" />
                </clipPath>
            </defs>
            <g id="Group_253" data-name="Group 253">
                <g id="Component_19_2" data-name="Component 19 – 2" clipPath="url(#clip-path)">
                    <g id="Group_192" data-name="Group 192" transform="translate(30.005 30.587)">
                        <path id="Path_144" data-name="Path 144" d="M268.1,356.976H240.4c-2.3,0-5.048-1.153-5.048-6.644l2.891-72.7a1.847,1.847,0,0,1,3.69.146L239.041,350.4c0,2.878.72,2.878,1.356,2.878h27.7a1.847,1.847,0,1,1,0,3.694Z"
                        transform="translate(-235.349 -275.854)" fill={color}/>
                    </g>
                    <g id="Group_193" data-name="Group 193">
                        <path id="Path_145" data-name="Path 145" d="M236.671,359a6.72,6.72,0,0,1-1.454-.17l-13.193-1.941c-1.348-.3-3.035-.865-3.624-2.657a7.369,7.369,0,0,1,.183-3.913l16.773-75.427a1.73,1.73,0,0,1,.094-.3c3.773-9.227,21.147-12.889,23.8-13.17l9.329-1.6a1.823,1.823,0,0,1,1.127.166c.068.033,6.773,3.341,12.911,3.341v3.729c-5.988,0-12.129-2.6-13.991-3.462l-8.809,1.512a1.807,1.807,0,0,1-.3.026c-2.32.162-17.617,3.906-20.6,10.743l-16.734,75.257a9.488,9.488,0,0,0-.29,1.877c.044,0,.279.1.791.214l13.2,1.939c1.066.235,1.528.336,2.061-2.084l14.974-62.354,3.589.878-14.966,62.318C240.8,357.291,239.165,359,236.671,359Z"
                        transform="translate(-218.201 -259.795)" fill={color}/>
                    </g>
                    <g id="Group_194" data-name="Group 194" transform="translate(61.939 109.861)">
                        <path id="Path_146" data-name="Path 146" d="M253.079,318.774" transform="translate(-253.079 -318.774)"
                        fill={color}stroke="#231f20" strokeMiterlimit="10" strokeWidth="0.5"
                        />
                    </g>
                    <g id="Group_195" data-name="Group 195" transform="translate(61.939 109.861)">
                        <path id="Path_147" data-name="Path 147" d="M253.079,318.774" transform="translate(-253.079 -318.774)"
                        fill={color}stroke="#231f20" strokeMiterlimit="10" strokeWidth="0.5"
                        />
                    </g>
                    <g id="Group_196" data-name="Group 196" transform="translate(59.279 30.586)">
                        <path id="Path_148" data-name="Path 148" d="M281.626,356.976h-27.7a1.847,1.847,0,0,1,0-3.694h27.7c.634,0,1.352,0,1.352-2.95l-2.885-72.559a1.847,1.847,0,0,1,3.69-.146l2.887,72.631C286.672,355.823,283.927,356.976,281.626,356.976Z"
                        transform="translate(-252.079 -275.854)" fill={color}/>
                    </g>
                    <g id="Group_197" data-name="Group 197" transform="translate(59.458)">
                        <path id="Path_149" data-name="Path 149" d="M298.982,359.017c-2.433,0-4.082-1.715-4.834-5.133L279.191,291.6l3.591-.878,14.965,62.318c.541,2.454,1,2.353,1.938,2.144l13.457-1.989a1.951,1.951,0,0,0,.741-.276c-.013-.164-.264-1.307-.371-1.8l-16.732-75.251c-2.981-6.837-18.278-10.581-20.646-10.743-.061-.006-.194-.017-.255-.026l-8.808-1.512c-1.86.858-8,3.462-13.99,3.462v-3.729c6.16,0,12.841-3.308,12.907-3.341a1.85,1.85,0,0,1,1.13-.166l9.329,1.6c2.656.282,20.031,3.943,23.8,13.168a1.807,1.807,0,0,1,.094.3l16.771,75.423a7.384,7.384,0,0,1,.183,3.917,4.285,4.285,0,0,1-3.491,2.633l-13.459,1.989A6.328,6.328,0,0,1,298.982,359.017Z"
                        transform="translate(-253.079 -259.795)" fill={color}/>
                    </g>
                    <g id="Group_198" data-name="Group 198" transform="translate(61.939 109.861)">
                        <path id="Path_150" data-name="Path 150" d="M253.079,318.774" transform="translate(-253.079 -318.774)"
                        fill={color}stroke="#231f20" strokeMiterlimit="10" strokeWidth="0.5"
                        />
                    </g>
                    <g id="Group_199" data-name="Group 199" transform="translate(61.939 109.861)">
                        <path id="Path_151" data-name="Path 151" d="M253.079,318.774" transform="translate(-253.079 -318.774)"
                        fill={color}stroke="#231f20" strokeMiterlimit="10" strokeWidth="0.5"
                        />
                    </g>
                    <g id="Group_200" data-name="Group 200" transform="translate(61.015 6.613)">
                        <rect id="Rectangle_27" data-name="Rectangle 27" width="1.847" height="101.677"
                        fill={color}/>
                    </g>
                    <g id="Group_201" data-name="Group 201" transform="translate(69.841 27.134)">
                        <path id="Path_152" data-name="Path 152" d="M261.732,276.209h-3.216a.924.924,0,1,1,0-1.847h3.216a.924.924,0,0,1,0,1.847Z"
                        transform="translate(-257.593 -274.362)" fill={color}/>
                    </g>
                    <g id="Group_202" data-name="Group 202" transform="translate(75.757 27.134)">
                        <path id="Path_153" data-name="Path 153" d="M265.068,276.209h-3.214a.924.924,0,1,1,0-1.847h3.214a.924.924,0,0,1,0,1.847Z"
                        transform="translate(-260.93 -274.362)" fill={color}/>
                    </g>
                    <g id="Group_203" data-name="Group 203" transform="translate(41.138 76.784)">
                        <path id="Path_154" data-name="Path 154" d="M242.351,319.944a.924.924,0,0,1-.24-1.816c.12-.037,5.388-1.845,5.388-16.339a.924.924,0,1,1,1.847,0c0,16.241-6.492,18.058-6.769,18.127A.948.948,0,0,1,242.351,319.944Z"
                        transform="translate(-241.427 -300.866)" fill={color}/>
                    </g>
                    <g id="Group_204" data-name="Group 204" transform="translate(73.681 76.784)">
                        <path id="Path_155" data-name="Path 155" d="M266.795,319.944a.921.921,0,0,1-.223-.028c-.277-.068-6.771-1.886-6.771-18.127a.924.924,0,1,1,1.847,0c0,14.588,5.336,16.324,5.392,16.341a.931.931,0,0,1,.639,1.13A.918.918,0,0,1,266.795,319.944Z"
                        transform="translate(-259.8 -300.866)" fill={color}/>
                    </g>
                    <g id="Group_205" data-name="Group 205" transform="translate(38.201 103.944)">
                        <rect id="Rectangle_28" data-name="Rectangle 28" width="0.924" height="4.346"
                        fill={color}/>
                    </g>
                    <g id="Group_206" data-name="Group 206" transform="translate(34.65 103.944)">
                        <rect id="Rectangle_29" data-name="Rectangle 29" width="0.924" height="4.346"
                        fill={color}/>
                    </g>
                    <g id="Group_207" data-name="Group 207" transform="translate(41.679 103.944)">
                        <rect id="Rectangle_30" data-name="Rectangle 30" width="0.924" height="4.346"
                        fill={color}/>
                    </g>
                    <g id="Group_208" data-name="Group 208" transform="translate(45.191 103.944)">
                        <rect id="Rectangle_31" data-name="Rectangle 31" width="0.924" height="4.346"
                        fill={color}/>
                    </g>
                    <g id="Group_209" data-name="Group 209" transform="translate(48.187 103.944)">
                        <rect id="Rectangle_32" data-name="Rectangle 32" width="0.924" height="4.346"
                        fill={color}/>
                    </g>
                    <g id="Group_210" data-name="Group 210" transform="translate(5.629 89.98)">
                        <rect id="Rectangle_33" data-name="Rectangle 33" width="4.346" height="0.924"
                        transform="rotate(-79.66 2.563 2.138)" fill={color}/>
                    </g>
                    <g id="Group_211" data-name="Group 211" transform="translate(8.241 89.98)">
                        <rect id="Rectangle_34" data-name="Rectangle 34" width="4.345" height="0.924"
                        transform="rotate(-79.66 2.563 2.138)" fill={color}/>
                    </g>
                    <g id="Group_212" data-name="Group 212" transform="translate(10.717 90.34)">
                        <rect id="Rectangle_35" data-name="Rectangle 35" width="4.346" height="0.924"
                        transform="rotate(-79.649 2.563 2.138)" fill={color}/>
                    </g>
                    <g id="Group_213" data-name="Group 213" transform="translate(13.195 90.667)">
                        <rect id="Rectangle_36" data-name="Rectangle 36" width="4.346" height="0.924"
                        transform="rotate(-79.66 2.563 2.138)" fill={color}/>
                    </g>
                    <g id="Group_214" data-name="Group 214" transform="translate(15.585 91.134)">
                        <rect id="Rectangle_37" data-name="Rectangle 37" width="4.346" height="0.924"
                        transform="rotate(-79.647 2.563 2.138)" fill={color}/>
                    </g>
                    <g id="Group_215" data-name="Group 215" transform="translate(51.516 103.944)">
                        <rect id="Rectangle_38" data-name="Rectangle 38" width="0.924" height="4.346"
                        fill={color}/>
                    </g>
                    <g id="Group_216" data-name="Group 216" transform="translate(55.178 103.944)">
                        <rect id="Rectangle_39" data-name="Rectangle 39" width="0.924" height="4.346"
                        fill={color}/>
                    </g>
                    <g id="Group_217" data-name="Group 217" transform="translate(58.285 103.944)">
                        <rect id="Rectangle_40" data-name="Rectangle 40" width="0.924" height="4.346"
                        fill={color}/>
                    </g>
                    <g id="Group_218" data-name="Group 218" transform="translate(65.054 103.944)">
                        <rect id="Rectangle_41" data-name="Rectangle 41" width="0.924" height="4.346"
                        fill={color}/>
                    </g>
                    <g id="Group_219" data-name="Group 219" transform="translate(67.734 103.944)">
                        <rect id="Rectangle_42" data-name="Rectangle 42" width="0.924" height="4.346"
                        fill={color}/>
                    </g>
                    <g id="Group_220" data-name="Group 220" transform="translate(71.246 103.944)">
                        <rect id="Rectangle_43" data-name="Rectangle 43" width="0.924" height="4.346"
                        fill={color}/>
                    </g>
                    <g id="Group_221" data-name="Group 221" transform="translate(74.242 103.944)">
                        <rect id="Rectangle_44" data-name="Rectangle 44" width="0.924" height="4.346"
                        fill={color}/>
                    </g>
                    <g id="Group_222" data-name="Group 222" transform="translate(77.571 103.944)">
                        <rect id="Rectangle_45" data-name="Rectangle 45" width="0.924" height="4.346"
                        fill={color}/>
                    </g>
                    <g id="Group_223" data-name="Group 223" transform="translate(81.233 103.944)">
                        <rect id="Rectangle_46" data-name="Rectangle 46" width="0.924" height="4.346"
                        fill={color}/>
                    </g>
                    <g id="Group_224" data-name="Group 224" transform="translate(84.34 103.944)">
                        <rect id="Rectangle_47" data-name="Rectangle 47" width="0.924" height="4.346"
                        fill={color}/>
                    </g>
                    <g id="Group_225" data-name="Group 225" transform="translate(87.891 103.944)">
                        <rect id="Rectangle_48" data-name="Rectangle 48" width="0.924" height="4.346"
                        fill={color}/>
                    </g>
                    <g id="Group_226" data-name="Group 226" transform="translate(31.174 103.02)">
                        <rect id="Rectangle_49" data-name="Rectangle 49" width="61.659" height="1.847"
                        fill={color}/>
                    </g>
                    <g id="Group_227" data-name="Group 227" transform="translate(2.56 87.598)">
                        <rect id="Rectangle_50" data-name="Rectangle 50" width="1.847" height="18.73"
                        transform="rotate(-80.795 1.072 .912)" fill={color}/>
                    </g>
                    <g id="Group_228" data-name="Group 228" transform="translate(116.272 90.096)">
                        <rect id="Rectangle_51" data-name="Rectangle 51" width="0.924" height="4.346"
                        transform="rotate(-10.353 .916 .083)" fill={color}/>
                    </g>
                    <g id="Group_229" data-name="Group 229" transform="translate(113.66 90.097)">
                        <rect id="Rectangle_52" data-name="Rectangle 52" width="0.924" height="4.345"
                        transform="rotate(-10.331 .918 .083)" fill={color}/>
                    </g>
                    <g id="Group_230" data-name="Group 230" transform="translate(111.183 90.456)">
                        <rect id="Rectangle_53" data-name="Rectangle 53" width="0.924" height="4.346"
                        transform="rotate(-10.352 .916 .083)" fill={color}/>
                    </g>
                    <g id="Group_231" data-name="Group 231" transform="translate(108.705 90.784)">
                        <rect id="Rectangle_54" data-name="Rectangle 54" width="0.924" height="4.346"
                        transform="matrix(.984 -.18 .18 .984 0 .166)" fill={color}/>
                    </g>
                    <g id="Group_232" data-name="Group 232" transform="translate(106.315 91.25)">
                        <rect id="Rectangle_55" data-name="Rectangle 55" width="0.924" height="4.346"
                        transform="rotate(-10.353 .916 .083)" fill={color}/>
                    </g>
                    <g id="Group_233" data-name="Group 233" transform="translate(102.246 87.714)">
                        <rect id="Rectangle_56" data-name="Rectangle 56" width="18.73" height="1.847"
                        transform="rotate(-9.217 18.609 1.5)" fill={color}/>
                    </g>
                    <g id="Group_234" data-name="Group 234" transform="translate(60.848 5.582)">
                        <path id="Path_156" data-name="Path 156" d="M257.8,271.173a3.091,3.091,0,0,1-2.2-.914l-.207-.312-2.828-7.13L260,265.852a3.117,3.117,0,0,1-2.2,5.321Zm-.774-2.109a1.3,1.3,0,0,0,1.672-.111,1.271,1.271,0,0,0,.109-1.67l-2.952-1.173Z"
                        transform="translate(-252.56 -262.817)" fill={color}/>
                    </g>
                </g>
            </g>
        </svg>
      );
    case "shirt":
      return (
        <svg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 125.477 115.43">
            <defs>
                <clipPath id="clip-path">
                    <rect width="125.477" height="115.43" fill="none" />
                </clipPath>
            </defs>
            <g id="Group_254" data-name="Group 254">
                <g id="Component_24_3" data-name="Component 24 – 3" clipPath="url(#clip-path)">
                    <g id="Group_167" data-name="Group 167" transform="translate(30.797 36.885)">
                        <path id="Path_124" data-name="Path 124" d="M159.56,358.389H132.844c-2.38,0-5.216-1.193-5.216-6.867l1.185-69.8a1.935,1.935,0,0,1,1.943-1.876,1.908,1.908,0,0,1,1.874,1.941l-1.185,69.77c0,3.017.744,3.017,1.4,3.017H159.56a1.909,1.909,0,0,1,0,3.817Z"
                        transform="translate(-127.628 -279.844)" fill={color}/>
                    </g>
                    <g id="Group_168" data-name="Group 168" transform="translate(0 6.798)">
                        <path id="Path_125" data-name="Path 125" d="M126.74,365.517a7.009,7.009,0,0,1-1.5-.174l-9.919-2.006c-4.707-1.04-3.953-4.449-3.455-6.7l13.612-77.524c3.9-9.457,21.9-13.2,24.607-13.482l9.684-1.521a1.908,1.908,0,1,1,.592,3.769l-10.01,1.552c-2.393.166-18.147,3.985-21.265,10.959l-13.476,76.988a10.225,10.225,0,0,0-.315,2.014c.052,0,.277.1.817.218l9.921,2c.989.219,1.473.328,2.027-2.155l15.473-63.828a1.908,1.908,0,0,1,3.708.9l-15.463,63.79C131.007,363.767,129.314,365.517,126.74,365.517Z"
                        transform="translate(-111.492 -264.08)" fill={color}/>
                    </g>
                    <g id="Group_169" data-name="Group 169" transform="translate(62.729 113.522)">
                        <path id="Path_126" data-name="Path 126" d="M144.359,320" transform="translate(-144.359 -319.998)"
                        fill={color}stroke="#231f20" strokeMiterlimit="10" strokeWidth="2" />
                    </g>
                    <g id="Group_170" data-name="Group 170" transform="translate(62.729 113.522)">
                        <path id="Path_127" data-name="Path 127" d="M144.359,320" transform="translate(-144.359 -319.998)"
                        fill={color}stroke="#231f20" strokeMiterlimit="10" strokeWidth="2" />
                    </g>
                    <g id="Group_171" data-name="Group 171" transform="translate(60.821 36.885)">
                        <path id="Path_128" data-name="Path 128" d="M171.982,358.389H145.268a1.909,1.909,0,1,1,0-3.817h26.714c.655,0,1.4,0,1.4-3.05l-3.088-69.684a1.909,1.909,0,1,1,3.813-.17l3.09,69.768C177.194,357.2,174.36,358.389,171.982,358.389Z"
                        transform="translate(-143.359 -279.844)" fill={color}/>
                    </g>
                    <g id="Group_172" data-name="Group 172" transform="translate(75.707 6.701)">
                        <path id="Path_129" data-name="Path 129" d="M185.651,365.569c-2.563,0-4.26-1.756-5.033-5.243l-17.351-63.7,3.684-1,17.372,63.792c.571,2.567,1.048,2.462,2.014,2.25l9.989-2.019a2.363,2.363,0,0,0,.865-.3c-.013-.168-.273-1.34-.384-1.84l-13.488-77.072c-3.122-6.974-18.874-10.793-21.317-10.959l-.237-.021L151.159,267.8l.588-3.771,10.568,1.643c2.708.279,20.7,4.023,24.609,13.482l.116.4,13.509,77.208a7.3,7.3,0,0,1,.174,3.922,4.422,4.422,0,0,1-3.607,2.695l-9.99,2.017A6.784,6.784,0,0,1,185.651,365.569Z"
                        transform="translate(-151.159 -264.029)" fill={color}/>
                    </g>
                    <g id="Group_173" data-name="Group 173" transform="translate(62.729 113.522)">
                        <path id="Path_130" data-name="Path 130" d="M144.359,320" transform="translate(-144.359 -319.998)"
                        fill={color}stroke="#231f20" strokeMiterlimit="10" strokeWidth="2" />
                    </g>
                    <g id="Group_174" data-name="Group 174" transform="translate(62.729 113.522)">
                        <path id="Path_131" data-name="Path 131" d="M144.359,320" transform="translate(-144.359 -319.998)"
                        fill={color}stroke="#231f20" strokeMiterlimit="10" strokeWidth="2" />
                    </g>
                    <g id="Group_175" data-name="Group 175" transform="translate(57.853 18.201)">
                        <rect id="Rectangle_23" data-name="Rectangle 23" width="1.909" height="93.695"
                        fill={color}/>
                    </g>
                    <g id="Group_176" data-name="Group 176" transform="translate(65.648 18.201)">
                        <rect id="Rectangle_24" data-name="Rectangle 24" width="1.909" height="93.695"
                        fill={color}/>
                    </g>
                    <g id="Group_177" data-name="Group 177" transform="translate(61.481 22.813)">
                        <path id="Path_132" data-name="Path 132" d="M146.131,273.685a1.213,1.213,0,1,1-1.214-1.214A1.214,1.214,0,0,1,146.131,273.685Z"
                        transform="translate(-143.705 -272.471)" fill={color}/>
                    </g>
                    <g id="Group_178" data-name="Group 178" transform="translate(61.481 41.9)">
                        <path id="Path_133" data-name="Path 133" d="M146.131,283.686a1.213,1.213,0,1,1-1.214-1.214A1.214,1.214,0,0,1,146.131,283.686Z"
                        transform="translate(-143.705 -282.472)" fill={color}/>
                    </g>
                    <g id="Group_179" data-name="Group 179" transform="translate(61.481 60.988)">
                        <path id="Path_134" data-name="Path 134" d="M146.131,293.687a1.213,1.213,0,1,1-1.214-1.214A1.214,1.214,0,0,1,146.131,293.687Z"
                        transform="translate(-143.705 -292.473)" fill={color}/>
                    </g>
                    <g id="Group_180" data-name="Group 180" transform="translate(61.481 80.076)">
                        <path id="Path_135" data-name="Path 135" d="M146.131,303.688a1.213,1.213,0,1,1-1.214-1.214A1.214,1.214,0,0,1,146.131,303.688Z"
                        transform="translate(-143.705 -302.474)" fill={color}/>
                    </g>
                    <g id="Group_181" data-name="Group 181" transform="translate(61.481 99.163)">
                        <path id="Path_136" data-name="Path 136" d="M146.131,313.689a1.213,1.213,0,1,1-1.214-1.214A1.214,1.214,0,0,1,146.131,313.689Z"
                        transform="translate(-143.705 -312.475)" fill={color}/>
                    </g>
                    <g id="Group_182" data-name="Group 182" transform="translate(54.77 3.517)">
                        <path id="Path_137" data-name="Path 137" d="M148.558,264.592c-4.718,0-8.316-.326-8.369-.33l.176-1.9a97.6,97.6,0,0,0,15.688,0l.178,1.9C153.6,264.51,150.934,264.592,148.558,264.592Z"
                        transform="translate(-140.189 -262.361)" fill={color}/>
                    </g>
                    <g id="Group_183" data-name="Group 183" transform="translate(53.308 .003)">
                        <path id="Path_138" data-name="Path 138" d="M149.1,262.831c-5.579,0-9.617-.406-9.676-.412l.195-1.9a107.632,107.632,0,0,0,18.582,0l.179,1.9C155.1,262.73,151.905,262.831,149.1,262.831Z"
                        transform="translate(-139.423 -260.52)" fill={color}/>
                    </g>
                    <g id="Group_184" data-name="Group 184" transform="translate(48.143)">
                        <path id="Path_139" data-name="Path 139" d="M144.888,280.856a.951.951,0,0,1-.412-.093c-.212-.1-5.2-2.607-7.739-14.715a.958.958,0,0,1,.248-.861l4.25-4.38a.957.957,0,0,1,1.617.456c.019.09,2.109,9.043,8.959,13.644a.955.955,0,0,1-.008,1.59l-6.39,4.2A.969.969,0,0,1,144.888,280.856ZM138.71,266.15c1.9,8.633,5.046,11.738,6.178,12.608l4.714-3.1c-4.915-3.863-7.249-9.554-8.148-12.337Z"
                        transform="translate(-136.716 -260.518)" fill={color}/>
                    </g>
                    <g id="Group_185" data-name="Group 185" transform="translate(61.798)">
                        <path id="Path_140" data-name="Path 140" d="M151.213,280.856a.964.964,0,0,1-.525-.156l-6.388-4.2a.953.953,0,0,1-.008-1.588c6.85-4.6,8.938-13.555,8.959-13.644a.957.957,0,0,1,1.617-.456l4.247,4.38a.954.954,0,0,1,.25.861c-2.537,12.108-7.529,14.614-7.739,14.715A.951.951,0,0,1,151.213,280.856Zm-4.712-5.2,4.712,3.1c1.132-.87,4.277-3.976,6.178-12.608l-2.743-2.828C153.748,266.1,151.416,271.8,146.5,275.659Z"
                        transform="translate(-143.871 -260.518)" fill={color}/>
                    </g>
                    <g id="Group_186" data-name="Group 186" transform="translate(5.655 97.671)">
                        <path id="Path_141" data-name="Path 141" d="M116.881,312.907a1.213,1.213,0,1,1-1.214-1.214A1.214,1.214,0,0,1,116.881,312.907Z"
                        transform="translate(-114.455 -311.693)" fill={color}/>
                    </g>
                    <g id="Group_187" data-name="Group 187" transform="translate(117.068 97.95)">
                        <path id="Path_142" data-name="Path 142" d="M175.256,313.053a1.213,1.213,0,1,1-1.214-1.214A1.213,1.213,0,0,1,175.256,313.053Z"
                        transform="translate(-172.83 -311.839)" fill={color}/>
                    </g>
                    <g id="Group_188" data-name="Group 188" transform="translate(4.373 92.429)">
                        <rect id="Rectangle_25" data-name="Rectangle 25" width="1.908" height="14.201"
                        transform="rotate(-79.351 1.13 .938)" fill={color}/>
                    </g>
                    <g id="Group_189" data-name="Group 189" transform="translate(106.282 92.43)">
                        <rect id="Rectangle_26" data-name="Rectangle 26" width="14.201" height="1.908"
                        transform="matrix(.983 -.185 .185 .983 0 2.623)" fill={color}/>
                    </g>
                    <g id="Group_190" data-name="Group 190" transform="translate(72.2 34.041)">
                        <path id="Path_143" data-name="Path 143" d="M157.272,280.263h-7a.954.954,0,1,1,0-1.909h7a.954.954,0,1,1,0,1.909Z"
                        transform="translate(-149.321 -278.354)" fill={color}/>
                    </g>
                </g>
            </g>
        </svg>
      );
    case "shorts":
      return (
        <svg id="shorts-svg" xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 83.712 73.888">
            <defs>
                <clipPath id="clip-path">
                    <rect width="83.712" height="73.888" fill="none" />
                </clipPath>
            </defs>
            <g id="Component_23_2" data-name="Component 23 – 2" clipPath="url(#clip-path)">
                <g id="Group_38" data-name="Group 38">
                    <path id="Path_27" data-name="Path 27" d="M297.692,453.92c-17.192,0-17.8-.613-18.449-1.263-.455-.461-1.111-1.127-6.044-24.235-2.21,11.9-4.271,22.913-4.429,23.417-.528,1.659-.623,1.956-19.381,1.956-16.4,0-16.583-.345-17.249-1.639-1.157-2.24,1.8-61.146,4.293-68.436a3.514,3.514,0,0,1,1.681-2.224c2.275-1.054,9.408-1.464,25.443-1.464l10.072.018,10.282-.018c19.731,0,24.292.579,25.807,1.647,1.119.788,2.177,1.535,4.238,35.711.731,12.13,1.787,33.182,1.618,34.175C315.249,453.468,315.172,453.92,297.692,453.92Zm-15.5-4.458c2.132.209,7.877.4,15.5.4,6.689,0,11.563-.146,13.831-.319-.286-9.786-2.813-58.28-4.5-64.655-2.069-.506-9.865-.792-23.11-.792l-10.282.018-10.072-.018c-13.171,0-21,.315-23.3.936-2.264,5.881-4.5,54.351-4.368,64.444,2.185.144,6.88.26,13.5.26,7.493,0,13.34-.142,15.744-.3.875-4.526,3.883-20.7,5.942-31.832a2.031,2.031,0,0,1,1.974-1.661h.022a2.032,2.032,0,0,1,1.99,1.616C277.295,428.274,280.985,445.343,282.187,449.463Z"
                    transform="translate(-231.881 -380.032)" fill={color}/>
                </g>
                <g id="Group_39" data-name="Group 39" transform="translate(2.916 2.14)">
                    <path id="Path_28" data-name="Path 28" d="M234.092,396.144l-.049-1.349c4.718-.171,7.5-9.57,8.17-13.176l1.326.248C243.431,382.439,240.843,395.9,234.092,396.144Z"
                    transform="translate(-234.043 -381.619)" fill={color}/>
                </g>
                <g id="Group_40" data-name="Group 40" transform="translate(71.329 2.14)">
                    <path id="Path_29" data-name="Path 29" d="M273.367,396.144c-6.751-.247-9.338-13.705-9.446-14.277l1.326-.248c.024.13,2.491,12.969,8.169,13.176Z"
                    transform="translate(-263.921 -381.619)" fill={color}/>
                </g>
                <g id="Group_41" data-name="Group 41" transform="translate(39.909 1.241)">
                    <rect id="Rectangle_5" data-name="Rectangle 5" width="1.349" height="23.938"
                    transform="rotate(-.738 1.32 .008)" fill={color}/>
                </g>
                <g id="Group_42" data-name="Group 42" transform="translate(43.936 4.801)">
                    <path id="Path_30" data-name="Path 30" d="M255.4,384.676a1.086,1.086,0,0,1-1.088,1.086h0a1.082,1.082,0,0,1-1.082-1.086h0a1.082,1.082,0,0,1,1.082-1.084h0a1.086,1.086,0,0,1,1.088,1.084Z"
                    transform="translate(-253.225 -383.592)" fill={color}/>
                </g>
                <g id="Group_43" data-name="Group 43" transform="translate(1.338 66.796)">
                    <rect id="Rectangle_6" data-name="Rectangle 6" width="22.517" height="1.349"
                    fill={color}/>
                </g>
                <g id="Group_44" data-name="Group 44" transform="translate(59.074 66.796)">
                    <rect id="Rectangle_7" data-name="Rectangle 7" width="22.516" height="1.349"
                    fill={color}/>
                </g>
            </g>
        </svg>
      );
    case "pants":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 73.445 114.717">
            <defs>
                <clipPath id="clip-path">
                    <rect width="73.445" height="114.717" fill="none" />
                </clipPath>
            </defs>
            <g id="Component_21_2" data-name="Component 21 – 2" clipPath="url(#clip-path)">
                <g id="Group_95" data-name="Group 95">
                    <path id="Path_72" data-name="Path 72" d="M183.886,482.288c-13.917,0-14.506-.59-15.074-1.162-.538-.546-1.14-1.157-7.46-60.155-5.692,58.7-5.846,59.184-5.915,59.4-.475,1.491-.574,1.8-15.844,1.8-13.351,0-13.53-.349-14.128-1.508-.727-1.405-.146-51.979-.138-52.491.42-34.672,1.26-54.074,2.489-57.672a2.589,2.589,0,0,1,1.278-1.585c2.093-.968,8.658-1.346,23.414-1.346l9.269.017,9.462-.017c18.157,0,22.357.531,23.751,1.514,1.138.8,2.037,1.437,2.966,56.306.378,22.172.7,53.885.553,54.73C198.218,481.83,198.139,482.288,183.886,482.288ZM171.7,478.216c1.891.179,6.373.334,12.188.334,5.248,0,9.116-.127,10.962-.278.121-12.329-.97-97.242-2.458-106.263-2.067-.448-9.2-.7-21.151-.7l-9.462.017-9.269-.017c-11.833,0-18.98.277-21.282.822-2.031,8.477-2.777,93.232-2.329,106.078,1.665.114,5.107.226,10.7.226,5.741,0,10.307-.12,12.372-.258.875-8.215,5.134-52.022,7.44-75.88a1.87,1.87,0,0,1,1.852-1.688h.009a1.867,1.867,0,0,1,1.858,1.671C166.044,429.932,170.543,471.1,171.7,478.216Z"
                    transform="translate(-125.1 -367.571)" fill={color}/>
                </g>
                <g id="Group_96" data-name="Group 96" transform="translate(1.098 6.035)">
                    <path id="Path_73" data-name="Path 73" d="M128.459,382.176a5.193,5.193,0,0,1-2.148-.452.675.675,0,0,1,.554-1.23c5.179,2.337,13.091-8.073,13.171-8.178a.675.675,0,0,1,1.079.81C140.8,373.539,134.237,382.176,128.459,382.176Z"
                    transform="translate(-125.914 -372.046)" fill={color}/>
                </g>
                <g id="Group_97" data-name="Group 97" transform="translate(56.516 6.036)">
                    <path id="Path_74" data-name="Path 74" d="M164.636,382.176c-5.779,0-12.343-8.637-12.654-9.05a.675.675,0,0,1,1.079-.81c.08.105,7.985,10.516,13.17,8.178a.675.675,0,0,1,.554,1.23A5.188,5.188,0,0,1,164.636,382.176Z"
                    transform="translate(-151.847 -372.046)" fill={color}/>
                </g>
                <g id="Group_98" data-name="Group 98" transform="translate(34.921 1.241)">
                    <rect id="Rectangle_14" data-name="Rectangle 14" width="1.349" height="23.936"
                    transform="translate(0 .017)" fill={color}/>
                </g>
                <g id="Group_99" data-name="Group 99" transform="translate(37.956 3.037)">
                    <path id="Path_75" data-name="Path 75" d="M147.342,370.907a1.088,1.088,0,0,1-1.09,1.087h0a1.084,1.084,0,0,1-1.082-1.087h0a1.084,1.084,0,0,1,1.082-1.084h0a1.087,1.087,0,0,1,1.09,1.084Z"
                    transform="translate(-145.171 -369.823)" fill={color}/>
                </g>
                <g id="Group_100" data-name="Group 100" transform="translate(2.686 5.627)">
                    <rect id="Rectangle_15" data-name="Rectangle 15" width="67.574" height="1.349"
                    fill={color}/>
                </g>
                <g id="Group_101" data-name="Group 101" transform="translate(14.71 1.419)">
                    <path id="Path_76" data-name="Path 76" d="M133.588,374.181a.674.674,0,0,1-.674-.674V369.3a.674.674,0,1,1,1.349,0v4.209A.675.675,0,0,1,133.588,374.181Z"
                    transform="translate(-132.914 -368.623)" fill={color}/>
                </g>
                <g id="Group_102" data-name="Group 102" transform="translate(55.417 1.419)">
                    <path id="Path_77" data-name="Path 77" d="M155.213,374.181a.674.674,0,0,1-.674-.674V369.3a.674.674,0,1,1,1.349,0v4.209A.675.675,0,0,1,155.213,374.181Z"
                    transform="translate(-154.539 -368.623)" fill={color}/>
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
