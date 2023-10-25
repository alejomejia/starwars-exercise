interface Props {
  color?: string
}

const STARWARS_LOGO_COLOR = '#ffe81f'

export function Logo({ color = STARWARS_LOGO_COLOR }: Props) {
  return (
    <svg viewBox="0 0 200 120" color={color}>
      <path
        fill="currentColor"
        d="m188.94 63.168-.022 8.671s-9.412-.03-14.197-.03c-1.592 0-2.672.003-2.724.012-.824.149-1.349 1.889-1.115 2.653.115.386.977 1.648 1.911 2.807.931 1.159 2.463 3.056 3.397 4.214 2.399 2.97 2.728 3.557 2.949 5.263.361 2.77-.959 5.768-3.41 7.746-2.456 1.983-2.349 1.996-20.583 1.996h-.801c-11.09-.002-16.955-.094-17.808-.282-1.517-.341-3.933-2.298-10.32-8.379-2.297-2.185-4.415-4.098-4.523-4.098-.003 0-.005.001-.005.004l-.075 12.756-10.351-.045-.064-32.9h23.085c6.958.248 11.667 7.127 10.73 11.514-.214.995-.756 2.438-1.206 3.204-.926 1.574-3.281 3.594-5.193 4.462-.706.316-1.283.686-1.283.817 0 .49 2.324 2.761 3.195 3.122.743.309 2.909.377 12.459.377l3.059.001c9.6 0 9.117-.069 9.858-1.643.52-1.096.125-1.75-3.529-5.834-4.628-4.57-4.143-6.759-4.175-8.376-.066-1.937 1.471-8.031 9.461-8.031l21.28-.001Zm-62.014 15.2c4.432 0 5.331-.069 6.274-.475 3.184-1.374 3.354-5.431.3-7.231-.668-.396-1.528-.46-6.332-.487l-5.559-.029c.046.043-.017 7.89-.017 7.89s1.392.332 5.334.332Zm64.326-17.49H167.66c-4.623 0-7.357 1.811-8.837 3.33-2.407 2.47-2.974 5.581-2.93 7.048.002.122.001.247-.001.378-.021 2.383.333 5.081 4.804 9.513.884.988 2.362 2.644 2.921 3.467-1.222.149-4.319.149-7.572.149h-3.059c-5.739 0-10.579-.017-11.571-.211a5.652 5.652 0 0 1-.547-.429c1.983-1.212 3.988-3.09 4.932-4.696.573-.977 1.204-2.645 1.47-3.883.588-2.754-.382-6.076-2.596-8.89-2.582-3.282-6.339-5.245-10.307-5.387l-.042-.002H108.887l.005 2.294.063 32.9.005 2.275 2.292.01 10.351.045 2.304.01.013-2.286.045-7.641c.211.199.43.406.654.62 6.986 6.65 9.331 8.492 11.408 8.958.57.126 1.514.335 18.316.34h.801c9.096 0 13.662 0 16.378-.26 3.111-.3 4.112-1 5.611-2.211l.05-.04c3.081-2.486 4.707-6.247 4.243-9.815-.302-2.32-.921-3.285-3.437-6.4l-.748-.928c-.877-1.087-1.936-2.4-2.646-3.283a23.951 23.951 0 0 1-1.294-1.755l1.418-.001c4.728 0 14.097.03 14.191.031l2.309.007.006-2.29.021-8.673.006-2.293Zm-67.339 15.117.011-1.876.006-1.671 3.226.016c1.854.01 4.643.025 5.187.178.694.419 1.081 1.065 1.039 1.734-.023.362-.197 1.027-1.102 1.417-.504.218-1.309.285-5.354.285-1.283 0-2.273-.037-3.013-.083ZM90.225 63.033l11.618 33.17-9.467.042-1.571-4.981-16.926-.135-1.494 4.987-9.37-.097 11.47-32.972 15.74-.014Zm-7.612 4.863c-.024.096-1.484 4.069-2.948 8.042a1428.966 1428.966 0 0 1-2.978 8.043c.04-.011 5.282-.023 8.641-.023 1.573 0 2.732.003 2.754.008v.002-.001c-.059-.152-5.452-15.877-5.47-16.07v-.003.002Zm9.252-7.154-1.641.002-15.741.014-1.643.002-.536 1.541-11.47 32.972-1.045 3.002 3.201.033 9.372.098 1.74.018.495-1.655 1-3.337 13.51.108 1.069 3.39.508 1.613 1.704-.007 9.466-.043 3.228-.015-1.06-3.026-11.618-33.169-.539-1.54Zm-11.858 20.93 1.825-4.948.69-1.873.625 1.831 1.707 4.987c-2.087 0-3.659 0-4.847.002ZM42.882 63.296l2.5 7.286c1.352 3.94 2.56 7.09 2.718 7.09a.01.01 0 0 0 .006-.003c.173-.152 5.067-14.253 5.067-14.253h9.483L51.215 96.499h-6.592s-7.035-20.164-7.007-20.241l-7.344 19.987h-6.525L12.45 63.296l9.437.006s5.17 14.542 5.239 14.542l5.159-14.548h10.597M9.228 61.005l1.038 3.029 11.297 32.948.532 1.552h9.792l.553-1.505 5.1-13.878a9796.438 9796.438 0 0 0 4.904 14.097l.537 1.54h9.881l.535-1.546L64.838 64.16l1.049-3.032h-14.36l-.535 1.544c-.858 2.47-1.996 5.732-2.97 8.491-.146-.418-.299-.858-.457-1.319l-2.5-7.285-.532-1.551H30.652l-.543 1.53-3.014 8.5c-.996-2.778-2.15-6.015-3.032-8.497l-.543-1.526-1.631-.001-9.438-.006-3.223-.002ZM153.513 23.709c7.475 0 12.662.105 13.659.277 2.307.398 4.392 1.62 5.955 3.497 1.634 1.963 2.009 2.901 2.223 5.591.306 3.797-1.514 7.073-5.104 9.2-1.047.62-2.122 1.224-2.39 1.344-.413.186-.358.364.38 1.222.476.552 1.301 1.34 1.831 1.748l.969.747 17.9.255.176 9.065h-10.975c-8.488 0-11.205-.077-12-.343-1.191-.401-4.057-2.81-9.882-8.31l-4.158-3.926.044 12.579h-10.682V23.709h12.054Zm-1.573 14.813h5.672c5.519 0 5.691-.017 6.479-.604 1.407-1.047 1.905-2.126 1.756-3.782-.153-1.709-.816-2.599-2.48-3.314-.937-.406-1.84-.472-6.263-.472h-5.164v8.172Zm1.573-17.102h-14.359v37.524H154.457l-.009-2.297-.025-7.215.242.228c7.205 6.803 9.33 8.348 10.732 8.82 1.076.36 2.878.464 12.741.464h13.326l-.045-2.333-.175-9.065-.043-2.213-2.23-.032-17.128-.243-.359-.277a7.42 7.42 0 0 1-.401-.337l.348-.206c4.326-2.561 6.593-6.697 6.219-11.346-.248-3.136-.813-4.548-2.745-6.867-1.898-2.28-4.504-3.805-7.337-4.294-1.575-.27-9.481-.311-14.055-.311Zm.733 11.22h2.858c4.044 0 4.846.066 5.339.28.938.403 1.033.598 1.106 1.418.074.815-.028 1.143-.842 1.75l-.065.047c-.537.098-2.533.098-5.03.098h-3.365l-.001-3.594ZM120.974 23.709l11.586 33.255-9.449-.052-1.534-4.981-16.851-.075-1.505 4.799h-9.622l11.459-32.946h15.916Zm-13.497 21.066 11.476-.015c.04 0-5.577-16.367-5.614-16.378-.041-.002-5.992 16.393-5.862 16.393Zm15.141-23.355H103.414l-.536 1.542-11.46 32.946-1.055 3.036h14.557l.504-1.609.998-3.182 13.446.06 1.038 3.368.496 1.611 1.698.01 9.449.051 3.257.018-1.064-3.055-11.586-33.255-.538-1.541ZM110.681 42.48c.712-2.01 1.703-4.766 2.599-7.242.85 2.473 1.791 5.22 2.477 7.236l-5.076.006ZM94.141 23.443v8.184H77.625v25.028h-9.847V31.606l-19.28.055c-2.323 0-2.634 1.837-2.634 2.54 0 .865.568 1.73 3.687 5.65 2.025 2.546 3.884 5.087 4.13 5.642 1.337 3.056-.393 7.817-3.544 9.752-2.246 1.377-1.863 1.41-18.543 1.41H10.93v-9.193H39.16l.833-.575c.562-.39.888-.925 1.012-1.657.173-1.053.084-1.19-3.403-5.088-4.12-4.607-4.555-5.448-4.342-8.39.242-3.356 3.258-8.232 8.53-8.232l52.351-.077Zm2.307-2.293-2.31.004-52.353.077c-3.015 0-5.816 1.293-7.883 3.64-1.677 1.904-2.777 4.415-2.943 6.718-.28 3.866.616 5.263 4.918 10.073 1.248 1.395 2.435 2.723 2.831 3.286a.387.387 0 0 1-.015.046.321.321 0 0 1-.02.015l-.237.163H8.624v13.773H31.594c8.224 0 12.283-.008 14.675-.182 2.736-.2 3.61-.665 4.917-1.471l.163-.1c4.113-2.525 6.232-8.535 4.447-12.612-.55-1.247-4.037-5.65-4.433-6.148-1.095-1.375-2.902-3.645-3.188-4.302a.755.755 0 0 1 .035-.153 1.2 1.2 0 0 1 .289-.028l16.972-.047v25.042h14.46V33.915h16.517V21.15Z"
      />
    </svg>
  )
}
