import React from 'react';
import PropTypes from '../../../utils/PropTypes';

import Leaf1 from '../../frames/Leaf1/Leaf1.frame';
import Leaf2 from '../../frames/Leaf2/Leaf2.frame';

const StepFinishAnimation = ({ leaf1, leaf2, leaf3, ...props }) => {
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
      rotate: leaf2.init.rotate,
      opacity: leaf2.init.opacity
    },
    visible: {
      x: leaf2.to.x,
      y: leaf2.to.y,
      rotate: leaf2.to.rotate,
      opacity: leaf2.to.opacity,
      transition
    }
  };

  const variantsLeaf3 = {
    hidden: {
      x: leaf3.init.x,
      y: leaf3.init.y,
      rotate: leaf3.init.rotate,
      opacity: leaf3.init.opacity
    },
    visible: {
      x: leaf3.to.x,
      y: leaf3.to.y,
      rotate: leaf3.to.rotate,
      opacity: leaf3.to.opacity,
      transition
    }
  };

  console.log('routes_props', props);

  return (
    <svg
      id="Grupo_129"
      data-name="Grupo 129"
      xmlns="http://www.w3.org/2000/svg"
      width="284.309"
      height="260.631"
      viewBox="0 0 284.309 260.631"
    >
      <Leaf2
        color="#CBCFF7"
        x={65}
        y={20}
        width={140}
        animation={{
          initial: {
            rotate: -50
          }
        }}
      />
      <Leaf2
        color="#CBCFF7"
        x={200}
        y={25}
        width={130}
        animation={{
          // initial: {
          //   rotate: -50
          // }
          variants: variantsLeaf3
        }}
      />
      <Leaf1
        color="#F0F8CC"
        x={-30}
        y={0}
        width={150}
        animation={{
          // initial: {
          //   rotate: 0
          // }
          variants: variantsLeaf1
        }}
      />
      <Leaf1
        color="#FD9697"
        x={162}
        y={85}
        width={180}
        animation={{
          // initial: {
          //   // x: 20,
          //   // y: -20,
          //   // rotate: 20,
          //   opacity: 0.6
          // },
          variants: variantsLeaf2
        }}
      />
      <g id="Grupo_127" data-name="Grupo 127">
        <g id="Grupo_125" data-name="Grupo 125" transform="translate(0 27)">
          <path
            id="Trazado_251"
            data-name="Trazado 251"
            d="M989.278,141.285q.5-1.009,1.042-2.006c1.936-3.584,4.1-7.27,7.057-10.11a2.92,2.92,0,0,1,1.693-.983c4.8-.348,4.281,12.584,4.243,15.341-.1,7.142.831,11.7-.984,18.738-.553,2.145-1.478,4.459-3.486,5.392-1.7.788-3.7.357-5.46-.288a36.079,36.079,0,0,1-7.641-4.079c-2.376-1.6-4.712-2.28-3.513-5.226C984.523,152.43,986.565,146.718,989.278,141.285Z"
            transform="translate(-777.726 -128.18)"
            fill="#ffe9c5"
          />
          <path
            id="Trazado_252"
            data-name="Trazado 252"
            d="M997.377,129.178c-2.958,2.84-5.122,6.526-7.057,10.11q-.538,1-1.042,2.006c-2.713,5.433-4.756,11.145-7.048,16.779-1.2,2.946,1.137,3.628,3.513,5.226.42.282.85.553,1.277.825,6.276-10.867,12.02-23.273,11.906-35.9A3.145,3.145,0,0,0,997.377,129.178Z"
            transform="translate(-777.726 -128.188)"
            fill="#fd9697"
          />
          <path
            id="Trazado_253"
            data-name="Trazado 253"
            d="M764.571,170.316a13.071,13.071,0,0,1,3.773-9.3c8.495-8.6,24.342-22.847,50.191-21.9,8.5.312,17.88.176,26.133,2.608,8.3,2.447,12.475,14.134,13.563,22.033,1.016,7.371-.6,15.225-5.132,21.127-2.286,2.978-5.415,5.648-6.693,9.276-1.347,3.823-1.555,8.536-2.384,12.533-1.647,7.93-3.462,15.866-4.676,23.877-2.365,15.6-.473,25.534-.473,25.534s26.958,1.738,31.214,13.639,0,18.521,0,18.521,29.8,4.257,17.972,31.215-88.732,33.542-125.332,21.755c-27.9-8.986-31.688-35.471-30.269-43.038s11.824-20.338,21.755-18.918c0,0-11.824-8.04-2.365-19.864s21.756-.946,21.756-.946-5.676-51.079-7.568-65.741A192.568,192.568,0,0,1,764.571,170.316Z"
            transform="translate(-732.202 -130.165)"
            fill="#272727"
          />
          <path
            id="Trazado_254"
            data-name="Trazado 254"
            d="M812.567,225.856a92.037,92.037,0,0,1,0,37.881c-4.373,20.771-14.212,23.5-14.759,40.995s13.118,70.779,13.665,74.745c0,0,28.887.846,47.083-2.631,0,0,6.484-39.864,8.125-52.436s-21.318-28.97-24.051-44.275-2.733-45.181-2.733-45.181Z"
            transform="translate(-744.16 -145.987)"
            fill="#eaaa7f"
          />
          <path
            id="Trazado_255"
            data-name="Trazado 255"
            d="M847.325,270.029c-1.359-15.4-1.36-34.152-1.36-34.152l-14.888-4.956C832.19,245.784,835.9,261.909,847.325,270.029Z"
            transform="translate(-750.228 -146.91)"
            fill="#cc814e"
          />
          <path
            id="Trazado_256"
            data-name="Trazado 256"
            d="M853.553,310.38a13.288,13.288,0,0,1-7.751.787c-13.487-4.817-29.065-13.835-36.087-27.044-4.8,12.492-11.459,16.933-11.906,31.232-.546,17.491,13.118,70.779,13.665,74.745,0,0,28.887.846,47.083-2.631,0,0,6.484-39.864,8.125-52.436C867.627,327.775,860.377,319.241,853.553,310.38Z"
            transform="translate(-744.16 -156.61)"
            fill="#414aa9"
          />
          <path
            id="Trazado_257"
            data-name="Trazado 257"
            d="M851.405,146.622c18.661,11.7,20.349,44.472,19.179,53.949s-8.192,24.851-30.428,26.022-32.769-13.041-32.769-13.041c-12.483,6.8-19.831-6.91-15.544-12.161s11.469,1.406,12.034,2.576c0,0-.39-15.214,4.291-25.357s10.533-14.044,20.675-14.824,19.505-3.9,19.505-9.363a26.035,26.035,0,0,0-.983-6.869,1.5,1.5,0,0,1,2.037-1.778Z"
            transform="translate(-742.851 -131.366)"
            fill="#eaaa7f"
          />
          <g
            id="Grupo_119"
            data-name="Grupo 119"
            transform="translate(73.656 48.6)"
          >
            <path
              id="Trazado_258"
              data-name="Trazado 258"
              d="M824.908,203.261c7.551,2.64,17.21.469,24.88-.7,7.506-1.139,17.987-1.81,24.085-6.575,2.73-2.133,1.443-7.627-2.04-8.183-4.1-.655-7.578.489-11.566,1.361-4.115.9-8.261,1.7-12.411,2.433-7.659,1.351-16.742,1.293-23.737,4.891-2.981,1.534-2.061,5.769.79,6.766Z"
              transform="translate(-822.28 -187.615)"
              fill="#dd9564"
            />
          </g>
          <g
            id="Grupo_120"
            data-name="Grupo 120"
            transform="translate(79.966 46.265)"
          >
            <path
              id="Trazado_259"
              data-name="Trazado 259"
              d="M835.526,192.291a2.765,2.765,0,1,1-2.727-2.8A2.764,2.764,0,0,1,835.526,192.291Z"
              transform="translate(-829.997 -185.622)"
              fill="#191213"
            />
            <path
              id="Trazado_260"
              data-name="Trazado 260"
              d="M872.158,187.562a2.764,2.764,0,1,1-2.726-2.8A2.764,2.764,0,0,1,872.158,187.562Z"
              transform="translate(-836.675 -184.76)"
              fill="#191213"
            />
          </g>
          <g
            id="Grupo_121"
            data-name="Grupo 121"
            transform="translate(78.62 52.809)"
          >
            <path
              id="Trazado_261"
              data-name="Trazado 261"
              d="M830,199.005a8.213,8.213,0,0,0-1.644,2.533"
              transform="translate(-828.351 -193.901)"
              fill="none"
              stroke="#cc6744"
              strokeMiterlimit="10"
              strokeWidth="0.25"
            />
            <path
              id="Trazado_262"
              data-name="Trazado 262"
              d="M831.668,199.655l-1.32,2.916"
              transform="translate(-828.715 -194.019)"
              fill="none"
              stroke="#cc6744"
              strokeMiterlimit="10"
              strokeWidth="0.25"
            />
            <path
              id="Trazado_263"
              data-name="Trazado 263"
              d="M872.1,193.62a5.487,5.487,0,0,1,1.594,2.031"
              transform="translate(-836.326 -192.919)"
              fill="none"
              stroke="#cc6744"
              strokeMiterlimit="10"
              strokeWidth="0.25"
            />
            <path
              id="Trazado_264"
              data-name="Trazado 264"
              d="M874.39,192.893c-.064-.007-.038-.123.026-.13s.118.05.159.1l1.245,1.527"
              transform="translate(-836.738 -192.762)"
              fill="none"
              stroke="#cc6744"
              strokeMiterlimit="10"
              strokeWidth="0.25"
            />
          </g>
          <path
            id="Trazado_265"
            data-name="Trazado 265"
            d="M860.206,182.528a23.423,23.423,0,0,0,1.034,10.966c.73,2.113,1.78,4.21,1.68,6.444a6.555,6.555,0,0,1-3.238,5.3"
            transform="translate(-755.443 -138.088)"
            fill="none"
            stroke="#cc6744"
            strokeMiterlimit="10"
            strokeWidth="1"
          />
          <path
            id="Trazado_266"
            data-name="Trazado 266"
            d="M846.267,212.939a8.867,8.867,0,0,0,7.567,5.833"
            transform="translate(-752.997 -143.632)"
            fill="none"
            stroke="#cc6744"
            strokeMiterlimit="10"
            strokeWidth="1"
          />
          <g
            id="Grupo_122"
            data-name="Grupo 122"
            transform="translate(76.684 36.618)"
          >
            <path
              id="Trazado_267"
              data-name="Trazado 267"
              d="M826.571,178.632c.919-.541,1.928-.9,2.854-1.437a10.494,10.494,0,0,1,2.672-1.083c.983-.258,3.035-.944,2.11-2.316-1.07-1.587-3.644-.539-4.941.119a5.5,5.5,0,0,0-3.277,4.308.389.389,0,0,0,.581.41Z"
              transform="translate(-825.983 -172.962)"
              fill="#402d1d"
            />
          </g>
          <g
            id="Grupo_123"
            data-name="Grupo 123"
            transform="translate(110.862 30.642)"
          >
            <path
              id="Trazado_268"
              data-name="Trazado 268"
              d="M877.9,171.143c-1.191-.442-2.449-.653-3.648-1.088a12.525,12.525,0,0,0-3.36-.709c-1.206-.1-3.757-.47-2.959-2.273.922-2.085,4.159-1.4,5.818-.9a6.556,6.556,0,0,1,4.745,4.364.463.463,0,0,1-.6.6Z"
              transform="translate(-867.782 -165.654)"
              fill="#402d1d"
            />
          </g>
          <path
            id="Trazado_269"
            data-name="Trazado 269"
            d="M920.087,199.073c-6.978-.394-13.808-2.144-20.755-2.91a24.574,24.574,0,0,0-7.411.06c-5.253,1.032-9.663,4.988-11.982,9.812a26.953,26.953,0,0,0-1.9,15.7c.444,2.894,1.724,6.23,4.586,6.845,2.075.445,4.161-.8,5.614-2.346,4.173-4.443,5.24-11.643,10.5-14.726,4.838-2.837,10.929-.883,16.28.8,4.556,1.429,9.3,2.626,14.057,2.222s9.581-2.659,12.009-6.77c2.205-3.733,2.226-11.471-3.148-11.978-2.209-.208-5.865,2.222-8.165,2.7A37.654,37.654,0,0,1,920.087,199.073Z"
            transform="translate(-758.72 -140.502)"
            fill="#fd9697"
          />
          <path
            id="Trazado_270"
            data-name="Trazado 270"
            d="M908.205,206.577c.25,4.018,17.346.531,23.158,10.823s7.718,24.778-2.193,49.554-25.5,57.559-15.609,90.341c0,0,111.608,25.488,132.96-27.116,0,0-53.693-144.8-56.742-154.9S976.845,163.835,957,165.3c-7.3.538-21.9,14.251-29.978,14.852s-26.675-5.3-29.067-3.6-1.07,15.384,4.523,19.113,10.564,4.039,22.369,2.8,16.156-4.4,16.156-4.4a26.465,26.465,0,0,1-14.913,8.443C916.766,204.054,908.034,203.819,908.205,206.577Z"
            transform="translate(-762.213 -134.857)"
            fill="#ffe8c2"
          />
          <path
            id="Trazado_271"
            data-name="Trazado 271"
            d="M913.471,181.1c-7.152-1.387-14.117-3-15.518-2-1.577,1.123-1.527,7.448.285,12.7A33.5,33.5,0,0,1,913.471,181.1Z"
            transform="translate(-762.214 -137.407)"
            fill="#080006"
          />
          <path
            id="Trazado_272"
            data-name="Trazado 272"
            d="M1000.848,165.93s14.274-24.411,17.24-26.636c3.716-2.787,3.7,19.421,3.337,22.8-1.112,10.381-7.971,25.4-7.971,25.953S1005.667,169.765,1000.848,165.93Z"
            transform="translate(-781.179 -130.162)"
            fill="#ffe9c5"
          />
          <path
            id="Trazado_273"
            data-name="Trazado 273"
            d="M1018.088,139.3c-2.966,2.225-17.24,26.636-17.24,26.636,1.794,1.427,4,4.936,6.062,8.748,4.393-11.954,11.282-22.545,12.2-35.478A.844.844,0,0,0,1018.088,139.3Z"
            transform="translate(-781.179 -130.166)"
            fill="#fd9697"
          />
          <circle
            id="Elipse_12"
            data-name="Elipse 12"
            cx="11.493"
            cy="11.493"
            r="11.493"
            transform="translate(180.887 49.409)"
            fill="#f8e2be"
          />
          <path
            id="Trazado_274"
            data-name="Trazado 274"
            d="M960.1,180.144a6.509,6.509,0,0,0-4.043,5.111,3.315,3.315,0,0,0,.418,2.334c.8,1.148,2.457,1.277,3.832,1.013a10.518,10.518,0,0,0,6.515-4.2"
            transform="translate(-773.005 -137.653)"
            fill="none"
            stroke="#2b3133"
            strokeMiterlimit="10"
            strokeWidth="0.25"
          />
          <path
            id="Trazado_275"
            data-name="Trazado 275"
            d="M801.09,307.4q.351-.732.747-1.415a10.291,10.291,0,0,1,2.477-3.241c12.51-9.385,53.233,33.9,62.029,38.521a280.139,280.139,0,0,0,33.317,15.27,117.505,117.505,0,0,0,13.843,4.178c8.035,1.886,12.489-2.065,19.212-6.431,19.3-12.531,32.7-25.326,47.228-44.656,4.451,3.316,13.29,7.551,15.954,12.421a12.848,12.848,0,0,1,1.886,5.845c.047,3.167-.207,8.8-2.055,11.372-9.856,13.722-55.578,62.724-73.913,67.609-11.533,3.073-29.142-2.66-39.846-6.356A231.518,231.518,0,0,1,845.308,383.6c-6.759-3.757-13.355-7.787-20.028-11.691-2.724-1.594-6.946-5.073-10.3-5.073-6.836,0-8.651,4.075-8.651,4.075q-2.64-13.152-5.022-26.355c-1.051-5.835-2.1-11.681-2.891-17.559C797.6,320.931,798.345,313.111,801.09,307.4Z"
            transform="translate(-744.217 -159.763)"
            fill="#eaaa7f"
          />
          <path
            id="Trazado_276"
            data-name="Trazado 276"
            d="M1015.692,309.569s21.709-33.678,22.044-41.118,11.914,15.716,11.914,22.953-2.451,27.643-6.147,32.089-12.73,14.853-13.917,16.174S1015.692,309.569,1015.692,309.569Z"
            transform="translate(-783.885 -153.487)"
            fill="#eaaa7f"
          />
          <path
            id="Trazado_277"
            data-name="Trazado 277"
            d="M1019.417,315.717q3.307-13.643,6.613-27.285a31.734,31.734,0,0,0,1.191-7.479,11.6,11.6,0,0,0-.51-3.54c-1.819.159-3.04,1.89-3.925,3.486-6.424,11.59-8.9,25-15.019,36.76-.587.15-1.025,1.823-.455,2.025C1011.615,321.211,1015.792,318.491,1019.417,315.717Z"
            transform="translate(-782.309 -155.386)"
            fill="#eaaa7f"
          />
          <path
            id="Trazado_278"
            data-name="Trazado 278"
            d="M910.793,424.347c10.17,3.133,22.67,6,31.567,3.632,3.778-1.007,8.652-4.008,14.093-8.256-.683-.219-1.375-.42-2.084-.577C940.049,415.566,923.134,416.675,910.793,424.347Z"
            transform="translate(-764.761 -180.869)"
            fill="#dd9564"
          />
          <g
            id="Grupo_124"
            data-name="Grupo 124"
            transform="translate(248.785 118.116)"
          >
            <path
              id="Trazado_279"
              data-name="Trazado 279"
              d="M1046.075,272.63s-2.89,16.994-9.619,25.267"
              transform="translate(-1036.456 -272.63)"
              fill="none"
              stroke="#cc6744"
              strokeMiterlimit="10"
              strokeWidth="1"
            />
            <path
              id="Trazado_280"
              data-name="Trazado 280"
              d="M1050.753,280.257c.771-.529-.226,12.852-6.009,23.623"
              transform="translate(-1037.967 -274.018)"
              fill="none"
              stroke="#cc6744"
              strokeMiterlimit="10"
              strokeWidth="1"
            />
            <path
              id="Trazado_281"
              data-name="Trazado 281"
              d="M1055.557,291.637s-1.263,12.273-3.464,18.554"
              transform="translate(-1039.307 -276.095)"
              fill="none"
              stroke="#cc6744"
              strokeMiterlimit="10"
              strokeWidth="1"
            />
          </g>
          <path
            id="Trazado_282"
            data-name="Trazado 282"
            d="M805.843,222.618a11.073,11.073,0,0,0-11.115-3.212"
            transform="translate(-743.601 -144.737)"
            fill="none"
            stroke="#cc6744"
            strokeMiterlimit="10"
            strokeWidth="1"
          />
        </g>
        <g
          id="Grupo_126"
          data-name="Grupo 126"
          transform="translate(138.517 0)"
        >
          <path
            id="Trazado_283"
            data-name="Trazado 283"
            d="M902.649,150.342c-1.4-3.731-1.721-8.436,1.112-11.239a1.937,1.937,0,0,1,1.964-.685,2.153,2.153,0,0,1,.944,1.045,30.459,30.459,0,0,1,3.657,12.426,21.653,21.653,0,0,1,6.607-10.4c1.586-1.375,3.935-2.535,5.685-1.376,1.82,1.206,1.568,3.939.881,6.011-1.448,4.371-4.971,11.824-9.532,13.785C908.2,162.388,904.4,155.012,902.649,150.342Z"
            transform="translate(-901.603 -117.383)"
            fill="#fd9697"
          />
          <path
            id="Trazado_284"
            data-name="Trazado 284"
            d="M919.263,128.133a36.121,36.121,0,0,1-8.636-10.613,1.586,1.586,0,0,1-.224-1.478,1.442,1.442,0,0,1,1.434-.491,6.392,6.392,0,0,1,5.575,5.313c.8-1.558,2.626-5.528,3.835-6.8.837-.877,2.088-1.725,3.172-1.184,1.12.56,1.151,2.131.941,3.366C924.62,120.6,921.821,124.532,919.263,128.133Z"
            transform="translate(-903.187 -112.713)"
            fill="#fd9697"
          />
          <path
            id="Trazado_285"
            data-name="Trazado 285"
            d="M940.673,143.914a26.38,26.38,0,0,1-1.6-12.076c.082-.8.525-1.843,1.311-1.673a1.417,1.417,0,0,1,.8.717,12.568,12.568,0,0,1,1.93,6.386,8.271,8.271,0,0,1,5.873-3.245,2.517,2.517,0,0,1,2.643,1.187c.364.931-.258,1.936-.884,2.716C947.655,141.783,945.146,141.8,940.673,143.914Z"
            transform="translate(-908.41 -115.891)"
            fill="#fd9697"
          />
        </g>
      </g>
    </svg>
  );
};

StepFinishAnimation.defaultProps = {
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

StepFinishAnimation.propTypes = {
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

export default StepFinishAnimation;
