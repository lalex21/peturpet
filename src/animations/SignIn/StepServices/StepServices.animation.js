import React from 'react';
import PropTypes from '../../../utils/PropTypes';

import Leaf1 from '../../frames/Leaf1/Leaf1.frame';
import Leaf2 from '../../frames/Leaf2/Leaf2.frame';

const StepServicesAnimation = ({ leaf1, leaf2, leaf3, ...props }) => {
  const transition = {
    duration: 1,
    delay: 0.15
  };

  const variantsLeaf1 = {
    hidden: {
      y: leaf1.init.y,
      rotate: leaf1.init.rotate
    },
    visible: {
      y: leaf1.to.y,
      rotate: leaf1.to.rotate,
      transition
    }
  };

  const variantsLeaf2 = {
    hidden: {
      x: leaf2.init.x,
      y: leaf2.init.y,
      rotate: leaf2.init.rotate
    },
    visible: {
      x: leaf2.to.x,
      y: leaf2.to.y,
      rotate: leaf2.to.rotate,
      transition
    }
  };

  const variantsLeaf3 = {
    hidden: {
      x: leaf3.init.x,
      y: leaf3.init.y,
      rotate: leaf3.init.rotate
    },
    visible: {
      x: leaf3.to.x,
      y: leaf3.to.y,
      rotate: leaf3.to.rotate,
      transition
    }
  };

  console.log('routes_props', props);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="264.036"
      viewBox="0 0 179.446 264.036"
    >
      <Leaf1
        color="#F0F8CC"
        x={-75}
        y={0}
        animation={{
          // initial: {
          //   rotate: -15
          // }
          variants: variantsLeaf1
        }}
      />
      <Leaf2
        color="#CBCFF7"
        // x={85}
        // y={10}
        x={144}
        y={24}
        width={140}
        animation={{
          // initial: {
          //   rotate: -50
          // }
          variants: variantsLeaf3
        }}
      />
      <Leaf1
        color="#FD9697"
        x={112}
        y={85}
        width={180}
        animation={{
          // initial: {
          //   rotate: 30
          // }
          variants: variantsLeaf2
        }}
      />
      <g
        id="Grupo_118"
        data-name="Grupo 118"
        transform="translate(-37.589 -48.045)"
      >
        <g
          id="Grupo_102"
          data-name="Grupo 102"
          transform="translate(37.589 48.045)"
        >
          <path
            id="Trazado_150"
            data-name="Trazado 150"
            d="M1219.548,218.217l-2.7,45.683s-33.639,5.191-39.661,7.268,9.137,102.372,9.137,102.372,43.606,11.018,74.546,7.891,47.967-12.874,47.967-12.874-30.524-105.9-29.693-105.9-25.541,1.038-25.541,1.038l-9.76-45.475Z"
            transform="translate(-1148.843 -120.601)"
            fill="#e69476"
          />
          <path
            id="Trazado_151"
            data-name="Trazado 151"
            d="M1262.466,244l-5.532-25.779h-24.3l-.887,14.994C1238.3,241.636,1252.363,247.808,1262.466,244Z"
            transform="translate(-1161.934 -120.601)"
            fill="#db7f63"
          />
          <path
            id="Trazado_152"
            data-name="Trazado 152"
            d="M1310.695,276.218v0C1310.72,276.219,1310.721,276.218,1310.695,276.218Z"
            transform="translate(-1180.395 -134.164)"
            fill="none"
            stroke="#2b3133"
            strokeMiterlimit="10"
            strokeWidth="0.75"
          />
          <path
            id="Trazado_153"
            data-name="Trazado 153"
            d="M1296.161,337.984a21.423,21.423,0,0,1-15.88-13.6c-5.631-15.485-10.051-31.574-8.624-47.75l-2.492.1c-19.968,17.893-51.913,19.96-74.014,4.392-7.842,1.371-15.4,2.819-17.965,3.7-6.022,2.076,9.137,102.372,9.137,102.372s43.606,11.018,74.546,7.891,47.967-12.874,47.967-12.874S1302.795,361.254,1296.161,337.984Z"
            transform="translate(-1148.843 -134.262)"
            fill="#ffe8c2"
          />
          <circle
            id="Elipse_5"
            data-name="Elipse 5"
            cx="19.582"
            cy="19.582"
            r="19.582"
            transform="translate(0 37.794) rotate(-28.991)"
            fill="#64361a"
          />
          <circle
            id="Elipse_6"
            data-name="Elipse 6"
            cx="19.582"
            cy="19.582"
            r="19.582"
            transform="translate(68.364 13.061) rotate(-19.481)"
            fill="#64361a"
          />
          <path
            id="Trazado_154"
            data-name="Trazado 154"
            d="M1199.212,196.459a10.952,10.952,0,0,1-16.222-.546,7.134,7.134,0,0,1-1.763-3.714,7.227,7.227,0,0,1,1.27-4.61,9.413,9.413,0,0,1,5.588-4.177,7.012,7.012,0,0,1,6.6,1.774Z"
            transform="translate(-1150.111 -112.415)"
            fill="#e69476"
          />
          <path
            id="Trazado_155"
            data-name="Trazado 155"
            d="M1287.6,183.6a10.951,10.951,0,0,0,12.578-10.258,7.134,7.134,0,0,0-.847-4.023,7.229,7.229,0,0,0-3.8-2.9,9.414,9.414,0,0,0-6.976.061,7.011,7.011,0,0,0-4.178,5.407Z"
            transform="translate(-1174.241 -108.339)"
            fill="#e69476"
          />
          <path
            id="Trazado_156"
            data-name="Trazado 156"
            d="M1189.4,140.483a35.561,35.561,0,0,0-1.339,25.277c2.612,8.376,5.22,16.333,16.375,26.663,18.158,16.815,36.249,15.254,44.827,9.146s30.336-20.4,7.654-65.581c-2.67-5.317-15.9-20.727-47.282-12.412A29.607,29.607,0,0,0,1189.4,140.483Z"
            transform="translate(-1151.32 -97.904)"
            fill="#e69476"
          />
          <g
            id="Grupo_90"
            data-name="Grupo 90"
            transform="translate(54.734 60.421)"
          >
            <path
              id="Trazado_157"
              data-name="Trazado 157"
              d="M1212.793,191.912c6.449,5.715,17.936,2.221,25.346.122a130.212,130.212,0,0,0,25.991-10.574c7.131-3.827,1.028-14.842-6.086-10.984a114.826,114.826,0,0,1-23.649,9.692c-7.069,1.992-17.2,2.4-21.942,8.573a2.612,2.612,0,0,0,.34,3.172Z"
              transform="translate(-1212.064 -169.668)"
              fill="#e58567"
            />
          </g>
          <path
            id="Trazado_158"
            data-name="Trazado 158"
            d="M1227.371,184.19a2.721,2.721,0,1,1-1.865-3.366A2.721,2.721,0,0,1,1227.371,184.19Z"
            transform="translate(-1159.661 -111.831)"
            fill="#2b3133"
          />
          <path
            id="Trazado_159"
            data-name="Trazado 159"
            d="M1261.137,173.388a2.721,2.721,0,1,1-1.865-3.366A2.72,2.72,0,0,1,1261.137,173.388Z"
            transform="translate(-1167.558 -109.305)"
            fill="#2b3133"
          />
          <g
            id="Grupo_91"
            data-name="Grupo 91"
            transform="translate(54.716 75.551)"
          >
            <path
              id="Trazado_160"
              data-name="Trazado 160"
              d="M1214.123,189.6c.054.116.2-.113.087-.166s-.24.052-.324.148l-1.846,2.092"
              transform="translate(-1212.04 -189.417)"
              fill="none"
              stroke="#d34d29"
              strokeMiterlimit="10"
              strokeWidth="0.25"
            />
            <path
              id="Trazado_161"
              data-name="Trazado 161"
              d="M1216.556,190.47l-1.408,3.275"
              transform="translate(-1212.767 -189.663)"
              fill="none"
              stroke="#d34d29"
              strokeMiterlimit="10"
              strokeWidth="0.25"
            />
          </g>
          <g
            id="Grupo_92"
            data-name="Grupo 92"
            transform="translate(97.944 62.065)"
          >
            <path
              id="Trazado_162"
              data-name="Trazado 162"
              d="M1269.472,171.814a15.2,15.2,0,0,1,3.177.8"
              transform="translate(-1268.699 -171.814)"
              fill="none"
              stroke="#d34d29"
              strokeMiterlimit="10"
              strokeWidth="0.25"
            />
            <path
              id="Trazado_163"
              data-name="Trazado 163"
              d="M1268.463,175.228l2.4,1.651"
              transform="translate(-1268.463 -172.612)"
              fill="none"
              stroke="#d34d29"
              strokeMiterlimit="10"
              strokeWidth="0.25"
            />
          </g>
          <path
            id="Trazado_164"
            data-name="Trazado 164"
            d="M1249.679,167.914a8.187,8.187,0,0,0,1.013,9.206c.91,1.017,2.037,1.833,2.849,2.929,1.843,2.489-.474,6.57-.758,6.836"
            transform="translate(-1165.899 -108.837)"
            fill="none"
            stroke="#d34d29"
            strokeMiterlimit="10"
            strokeWidth="1"
          />
          <path
            id="Trazado_165"
            data-name="Trazado 165"
            d="M1246.088,201.761a10.426,10.426,0,0,0,8.683-.831"
            transform="translate(-1165.287 -116.558)"
            fill="none"
            stroke="#d34d29"
            strokeMiterlimit="10"
            strokeWidth="1"
          />
          <g
            id="Grupo_93"
            data-name="Grupo 93"
            transform="translate(90.036 42.395)"
          >
            <path
              id="Trazado_166"
              data-name="Trazado 166"
              d="M1268.648,149.114a10.2,10.2,0,0,0-8.473-2.908c-2.654.3-2.769,4.427,0,4.245a67.821,67.821,0,0,0,8.383-1,.2.2,0,0,0,.09-.338Z"
              transform="translate(-1258.141 -146.14)"
              fill="#64361a"
            />
          </g>
          <g
            id="Grupo_94"
            data-name="Grupo 94"
            transform="translate(53.117 53.466)"
          >
            <path
              id="Trazado_167"
              data-name="Trazado 167"
              d="M1209.974,166.911c1.791.585,3.826-.559,5.566-.97,2.121-.5,4.49-.876,6.02-2.56.732-.805.581-2.541-.72-2.727-2.506-.359-4.571.857-6.58,2.254-1.5,1.042-3.8,2.068-4.307,3.968a.028.028,0,0,0,.02.035Z"
              transform="translate(-1209.953 -160.59)"
              fill="#64361a"
            />
          </g>
          <path
            id="Trazado_168"
            data-name="Trazado 168"
            d="M1257.818,135.806c-2.669-5.317-16.8-20.553-48.182-12.237a29.607,29.607,0,0,0-20.235,16.907,35.561,35.561,0,0,0-1.339,25.277,80.414,80.414,0,0,0,4.823,11.958c-.072-.269-4.66-17.732,2.9-33.768,0,0,8.859,13.9,24.455,12.243,3.146-.335,11.719-7.056,11.719-7.056s-12.969-5.381-11.363-12.4,11.138-10.739,11.138-10.739,10.388,9.185,20.064,11.96c0,0,10.491,10.534,13.841,19.832C1263.839,151.4,1261.932,144,1257.818,135.806Z"
            transform="translate(-1151.32 -97.898)"
            fill="#64361a"
          />
          <path
            id="Trazado_169"
            data-name="Trazado 169"
            d="M1241.7,127.414c-2.025,2.99-6.871,12.661,8.631,20.216,0,0-6.149-11.522-4.781-18.549a2.149,2.149,0,0,0-2.1-2.6h0A2.125,2.125,0,0,0,1241.7,127.414Z"
            transform="translate(-1163.713 -99.148)"
            fill="#64361a"
          />
          <path
            id="Trazado_170"
            data-name="Trazado 170"
            d="M1335.034,201.853a24.359,24.359,0,0,1,2.788-1.971c3.641-2.269,7.014-4.883,10.915-6.724a3.706,3.706,0,0,1,2.636-.482c2,.644,2.809,24.275-.139,29.557a6.482,6.482,0,0,1-4.01,3.31,7.082,7.082,0,0,1-4.055-.477,17.842,17.842,0,0,1-6.708-4.884c-2.818-3.127-4.951-7.116-4.879-11.324A8.758,8.758,0,0,1,1335.034,201.853Z"
            transform="translate(-1185.279 -114.605)"
            fill="#5e605e"
          />
          <path
            id="Trazado_171"
            data-name="Trazado 171"
            d="M1348.737,193.334c-3.9,1.842-7.275,4.456-10.916,6.724a24.34,24.34,0,0,0-2.787,1.971,8.758,8.758,0,0,0-3.452,7c-.067,3.936,1.8,7.681,4.342,10.708a31.309,31.309,0,0,1,5.08-15.856c2.966-3.955,6.825-7.609,11.216-9.18"
            transform="translate(-1185.279 -114.782)"
            fill="#5e605e"
          />
          <path
            id="Trazado_172"
            data-name="Trazado 172"
            d="M1342.329,204.3a31.31,31.31,0,0,0-5.08,15.856q.264.314.537.617a17.841,17.841,0,0,0,6.708,4.884,7.082,7.082,0,0,0,4.055.477,6.481,6.481,0,0,0,4.01-3.31c2.484-4.451,2.3-21.929.985-27.7C1349.153,196.694,1345.294,200.348,1342.329,204.3Z"
            transform="translate(-1186.605 -115.2)"
            fill="#ff999f"
          />
          <path
            id="Trazado_173"
            data-name="Trazado 173"
            d="M1303.641,190.968a24.347,24.347,0,0,0-2.471-2.357c-3.271-2.775-6.228-5.853-9.819-8.243a3.705,3.705,0,0,0-2.537-.861c-2.075.345-6.316,23.606-4.169,29.262a6.48,6.48,0,0,0,3.485,3.858,7.076,7.076,0,0,0,4.081.119,17.849,17.849,0,0,0,7.349-3.854c3.243-2.683,5.935-6.318,6.477-10.492A8.758,8.758,0,0,0,1303.641,190.968Z"
            transform="translate(-1174.165 -111.542)"
            fill="#5e605e"
          />
          <path
            id="Trazado_174"
            data-name="Trazado 174"
            d="M1292.466,180.639c3.591,2.39,6.547,5.468,9.819,8.243a24.338,24.338,0,0,1,2.471,2.357,8.758,8.758,0,0,1,2.395,7.432c-.507,3.9-2.9,7.337-5.856,9.961a31.3,31.3,0,0,0-2.715-16.427c-2.357-4.345-5.643-8.522-9.759-10.717"
            transform="translate(-1175.28 -111.813)"
            fill="#5e605e"
          />
          <path
            id="Trazado_175"
            data-name="Trazado 175"
            d="M1297.465,192.463a31.3,31.3,0,0,1,2.715,16.427q-.307.271-.621.532a17.848,17.848,0,0,1-7.349,3.854,7.076,7.076,0,0,1-4.081-.119,6.478,6.478,0,0,1-3.485-3.858c-1.809-4.766.917-22.031,3.062-27.553C1291.823,183.941,1295.108,188.118,1297.465,192.463Z"
            transform="translate(-1174.165 -112.072)"
            fill="#ff999f"
          />
          <path
            id="Trazado_176"
            data-name="Trazado 176"
            d="M1342.3,229.582c-2.358,12.69-18.926,13.393-36.148,10.193s-28.577-9.091-26.219-21.782,18.231-20.383,35.453-17.183S1344.662,216.892,1342.3,229.582Z"
            transform="translate(-1173.13 -116.36)"
            fill="#5e605e"
          />
          <path
            id="Trazado_177"
            data-name="Trazado 177"
            d="M1338.014,224.292c-1.115-2.6-5.077-3.714-8.957-3.252-2.187.26-4.354.347-6.535.408-4.462-.035-9.1-.551-13.267-.82-5.773-.372-15.052-2.874-19.818.5-5.264,3.73,3.738,7.049,8.508,7.552,3.751.4,7.53.7,11.31.956q1.358.092,2.726.19a51.015,51.015,0,0,0,8.238,1.033,85.969,85.969,0,0,0,12.71-.844C1336.8,229.577,1338.987,226.556,1338.014,224.292Z"
            transform="translate(-1175.05 -120.875)"
            fill="#4b4c4b"
          />
          <circle
            id="Elipse_7"
            data-name="Elipse 7"
            cx="2.44"
            cy="2.44"
            r="2.44"
            transform="translate(123.353 94.79)"
            fill="#2b3133"
          />
          <circle
            id="Elipse_8"
            data-name="Elipse 8"
            cx="2.44"
            cy="2.44"
            r="2.44"
            transform="translate(150.189 97.229)"
            fill="#2b3133"
          />
          <path
            id="Trazado_178"
            data-name="Trazado 178"
            d="M1316.217,232.689a13.574,13.574,0,0,1-1.021,3.988,4.586,4.586,0,0,1-3.023,2.6c-1.667.341-3.31-.592-4.707-1.562a46.681,46.681,0,0,1-6.379-5.329c-.564-.565-.784-.185-1.546.054"
            transform="translate(-1177.787 -123.846)"
            fill="none"
            stroke="#2b3133"
            strokeMiterlimit="10"
            strokeWidth="0.75"
          />
          <path
            id="Trazado_179"
            data-name="Trazado 179"
            d="M1321.295,232.87a13.565,13.565,0,0,0,.405,4.1,4.59,4.59,0,0,0,2.6,3.029c1.6.588,3.361-.084,4.889-.832a46.692,46.692,0,0,0,7.112-4.3c.644-.472.8-.064,1.52.288"
            transform="translate(-1182.874 -124.027)"
            fill="none"
            stroke="#2b3133"
            strokeMiterlimit="10"
            strokeWidth="0.75"
          />
          <path
            id="Trazado_180"
            data-name="Trazado 180"
            d="M1318.294,228.063l4.915.336a.334.334,0,0,1,.208.574l-2.643,2.543a.334.334,0,0,1-.494-.034l-2.271-2.88A.333.333,0,0,1,1318.294,228.063Z"
            transform="translate(-1182.089 -122.903)"
            fill="#db7f63"
          />
          <g
            id="Grupo_97"
            data-name="Grupo 97"
            transform="translate(121.468 100.743)"
          >
            <g id="Grupo_95" data-name="Grupo 95">
              <path
                id="Trazado_181"
                data-name="Trazado 181"
                d="M1300.576,222.3l-1.409.956"
                transform="translate(-1299.167 -222.298)"
                fill="none"
                stroke="#2b3133"
                strokeMiterlimit="10"
                strokeWidth="0.25"
              />
              <path
                id="Trazado_182"
                data-name="Trazado 182"
                d="M1301.646,223.385a13.745,13.745,0,0,1-.753,1.549"
                transform="translate(-1299.571 -222.552)"
                fill="none"
                stroke="#2b3133"
                strokeMiterlimit="10"
                strokeWidth="0.25"
              />
            </g>
            <g
              id="Grupo_96"
              data-name="Grupo 96"
              transform="translate(33.602 2.382)"
            >
              <path
                id="Trazado_183"
                data-name="Trazado 183"
                d="M1343.57,225.407l1.615.539"
                transform="translate(-1343.153 -225.407)"
                fill="none"
                stroke="#2b3133"
                strokeMiterlimit="10"
                strokeWidth="0.25"
              />
              <path
                id="Trazado_184"
                data-name="Trazado 184"
                d="M1343.026,226.689a13.907,13.907,0,0,0,1.144,1.288"
                transform="translate(-1343.026 -225.707)"
                fill="none"
                stroke="#2b3133"
                strokeMiterlimit="10"
                strokeWidth="0.25"
              />
            </g>
          </g>
          <circle
            id="Elipse_9"
            data-name="Elipse 9"
            cx="31.652"
            cy="31.652"
            r="31.652"
            transform="translate(74.681 139.89)"
            fill="#5e605e"
          />
          <path
            id="Trazado_185"
            data-name="Trazado 185"
            d="M1260.17,272.249s-48.531-8.441-53.607,0c-5.437,9.041,22.518,16.6,22.4,26.385s-27.682-8.317-30.895-4.049c-7.012,9.315,26.339,47.645,69.311,40.132S1260.17,272.249,1260.17,272.249Z"
            transform="translate(-1153.839 -132.359)"
            fill="#5e605e"
          />
          <g
            id="Grupo_100"
            data-name="Grupo 100"
            transform="translate(89.962 168.148)"
          >
            <g id="Grupo_98" data-name="Grupo 98">
              <line
                id="Línea_2"
                data-name="Línea 2"
                y2="6.787"
                transform="translate(3.393)"
                fill="none"
                stroke="#2b3133"
                strokeMiterlimit="10"
                strokeWidth="0.75"
              />
              <line
                id="Línea_3"
                data-name="Línea 3"
                x2="6.787"
                transform="translate(0 3.393)"
                fill="none"
                stroke="#2b3133"
                strokeMiterlimit="10"
                strokeWidth="0.75"
              />
            </g>
            <g
              id="Grupo_99"
              data-name="Grupo 99"
              transform="translate(0.994 0.994)"
            >
              <line
                id="Línea_4"
                data-name="Línea 4"
                x2="4.799"
                y2="4.799"
                fill="none"
                stroke="#2b3133"
                strokeMiterlimit="10"
                strokeWidth="0.75"
              />
              <line
                id="Línea_5"
                data-name="Línea 5"
                y1="4.799"
                x2="4.799"
                fill="none"
                stroke="#2b3133"
                strokeMiterlimit="10"
                strokeWidth="0.75"
              />
            </g>
          </g>
          <g
            id="Grupo_101"
            data-name="Grupo 101"
            transform="translate(45.106 137.744)"
          >
            <path
              id="Trazado_186"
              data-name="Trazado 186"
              d="M1202.6,305.68a1.6,1.6,0,0,0-3.014,1.046,1.6,1.6,0,0,0,3.014-1.046Z"
              transform="translate(-1199.497 -278.553)"
              fill="#ff999f"
            />
            <path
              id="Trazado_187"
              data-name="Trazado 187"
              d="M1207.841,308.045c2.018-.11,1.922-2.443.1-2.747-1.5-.251-2.964,1.054-1.593,2.274A2.071,2.071,0,0,0,1207.841,308.045Z"
              transform="translate(-1200.972 -278.702)"
              fill="#ff999f"
            />
            <path
              id="Trazado_188"
              data-name="Trazado 188"
              d="M1201.192,311.437c-.575-1.952-2.348-.066-1.154.914a.816.816,0,0,0,.418.192C1200.977,312.6,1201.341,311.94,1201.192,311.437Z"
              transform="translate(-1199.529 -279.946)"
              fill="#ff999f"
            />
            <path
              id="Trazado_189"
              data-name="Trazado 189"
              d="M1202.988,311.519a3.671,3.671,0,0,0,.625,2.217,4.4,4.4,0,0,0,2.354,1.637c3.028.89,4.924-2.009,2.279-4.035-.928-.711-2.593-1.79-3.832-1.559A1.718,1.718,0,0,0,1202.988,311.519Z"
              transform="translate(-1200.312 -279.75)"
              fill="#ff999f"
            />
            <path
              id="Trazado_190"
              data-name="Trazado 190"
              d="M1213.841,276.468c1.693-1.2.291-4.339-1.382-2.93C1210.985,274.779,1211.759,277.937,1213.841,276.468Z"
              transform="translate(-1202.35 -271.199)"
              fill="#ff999f"
            />
            <path
              id="Trazado_191"
              data-name="Trazado 191"
              d="M1218.485,271.064c-.474-.562-1.427-.788-2.25.282a.988.988,0,0,0-.123,1.1,1.287,1.287,0,0,0,1.172.423C1218.939,272.8,1219.029,271.71,1218.485,271.064Z"
              transform="translate(-1203.355 -270.593)"
              fill="#ff999f"
            />
            <path
              id="Trazado_192"
              data-name="Trazado 192"
              d="M1215.711,280.758c-.307-.787-1.678-1.931-2.311-.839-.395.681.162,1.745.668,2.173a1.15,1.15,0,0,0,1.21.221A1.241,1.241,0,0,0,1215.711,280.758Z"
              transform="translate(-1202.717 -272.669)"
              fill="#ff999f"
            />
            <path
              id="Trazado_193"
              data-name="Trazado 193"
              d="M1217.712,275.636a1.985,1.985,0,0,0-.234,2.516,4.926,4.926,0,0,0,1.8,1.819,5.235,5.235,0,0,0,2.593.861,3.229,3.229,0,0,0,2.488-.991,3.045,3.045,0,0,0,.332-3.367,3.905,3.905,0,0,0-2.877-1.941A5.24,5.24,0,0,0,1217.712,275.636Z"
              transform="translate(-1203.624 -271.502)"
              fill="#ff999f"
            />
          </g>
          <path
            id="Trazado_194"
            data-name="Trazado 194"
            d="M1181.679,283.8s-14.751.755-21.678,6.816-32.58,82.186,30.86,108.231c21.091,8.658,63.595-53.683,72.648-78.36s7.753-35.283,4.868-37.782-15.655,16.746-15.655,16.746.441-8.888-1.971-9-5.251,14.325-9.021,20.118c-2.5,3.842-17.612,31.843-47.444,35.738C1194.286,346.3,1175.218,316.812,1181.679,283.8Z"
            transform="translate(-1142.584 -135.629)"
            fill="#e69476"
          />
          <path
            id="Trazado_195"
            data-name="Trazado 195"
            d="M1296.049,324.489a46.45,46.45,0,0,1,10.32-19.939c8.479-9.792,31.378-36.158,19.456-52.755-11.887-16.548-117.451-16.51-117.451-16.51s-11.865-9.429-13.416-7.559c-1.915,2.31,3.068,7.559,3.068,7.559-1.223,1.306-7.622-.455-13.233-.779-5.684-.329-6.1-.136-3.962,7.171,4.463,15.285,97.324,28.948,101.551,42.274C1287.732,300.823,1296.049,324.489,1296.049,324.489Z"
            transform="translate(-1149.748 -122.767)"
            fill="#e69476"
          />
          <path
            id="Trazado_196"
            data-name="Trazado 196"
            d="M1216.791,389.384c-8.97-9.717-23.919-8.222-35.131-2.243a30.087,30.087,0,0,0-13.451,15.747c6.353,7.686,15.155,14.4,27.142,19.318,7.3,3,17.163-2.514,27.318-12.022C1223.436,402.389,1222.023,394.615,1216.791,389.384Z"
            transform="translate(-1147.074 -158.989)"
            fill="#e2876a"
          />
          <path
            id="Trazado_197"
            data-name="Trazado 197"
            d="M1359.375,255.789c-3.75-5.22-16.823-8.788-32.962-11.229-9.412,19.337,2.294,45.91,22.276,52.8.1.037.209.068.313.1C1358.247,285.186,1368.069,267.891,1359.375,255.789Z"
            transform="translate(-1183.298 -126.761)"
            fill="#e2876a"
          />
        </g>
        <path
          id="Trazado_198"
          data-name="Trazado 198"
          d="M1323.923,173.331a16.479,16.479,0,0,1-12.041-11c-.655-2.111-.622-4.89,1.3-5.985,1.768-1.009,4.03.09,5.449,1.549a11.724,11.724,0,0,1,2.843,4.9c.634-3.141,1.553-7.544,4.211-9.335a2.323,2.323,0,0,1,1.337-.508c.971.037,1.542,1.1,1.8,2.037C1330.415,160.812,1326.622,167.925,1323.923,173.331Z"
          transform="translate(-1142.993 -57.293)"
          fill="#fd9697"
        />
        <path
          id="Trazado_199"
          data-name="Trazado 199"
          d="M1318.316,134.648a17.709,17.709,0,0,1-7.3-5.425c-.878-1.107-1.6-2.786-.643-3.828.784-.858,2.2-.65,3.238-.12a10.263,10.263,0,0,0,3.136,1.474,11.518,11.518,0,0,1,3.478-4.081,3.056,3.056,0,0,1,2.005-.847c1.738.116,2.18,2.485,1.914,4.206C1323.595,129.549,1320.457,131.8,1318.316,134.648Z"
          transform="translate(-1142.624 -50.013)"
          fill="#fd9697"
        />
      </g>
    </svg>
  );
};

StepServicesAnimation.propTypes = {
  leaf1: PropTypes.shape({
    init: PropTypes.stringOrNumber,
    to: PropTypes.stringOrNumber
  }),
  leaf2: PropTypes.shape({
    init: PropTypes.stringOrNumber,
    to: PropTypes.stringOrNumber
  }),
  leaf3: PropTypes.shape({
    init: PropTypes.stringOrNumber,
    to: PropTypes.stringOrNumber
  })
};

StepServicesAnimation.defaultProps = {
  leaf1: {
    init: 0,
    to: 0
  },
  leaf2: {
    init: 0,
    to: 0
  },
  leaf3: {
    init: 0,
    to: 0
  }
};

export default StepServicesAnimation;
