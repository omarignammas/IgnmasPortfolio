import React, {
    useState,
    useEffect,
    useRef,
    useMemo,
    useCallback,
  } from "react";
  
  /* ------------------ ICONS (brand colors conservés) ------------------ */
  const SparkleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="2em" height="2em"  viewBox="0 0 100 100"><path fill="#6CB52D" d="M91.059 5.746c-1.437 3.493-3.295 6.59-5.35 9.363C76.641 5.87 63.958 0 49.963 0 22.468-.001 0 22.343 0 49.938 0 64.355 6.168 77.335 15.953 86.5l1.858 1.66A49.68 49.68 0 0 0 49.939 99.9c26.257 0 47.882-20.486 49.74-46.347 1.486-12.559-2.328-28.635-8.62-47.808M23.186 86.92c-1.437 1.858-4.112 2.056-5.97.62-1.858-1.437-2.056-4.113-.62-5.97 1.437-1.858 4.113-2.056 5.97-.62 1.76 1.437 2.057 4.112.62 5.97m67.576-14.937C78.5 88.358 52.143 82.81 35.349 83.626c0 0-2.998.199-5.97.62 0 0 1.14-.52 2.576-1.04 11.84-4.113 17.414-4.955 24.622-8.646 13.5-6.91 26.976-22.046 29.676-37.701-5.152 15.036-20.808 28.016-35.026 33.267-9.785 3.617-27.397 7.11-27.397 7.11l-.718-.422c-11.94-5.87-12.361-31.83 9.487-40.178 9.586-3.716 18.653-1.66 29.057-4.112 11.023-2.577 23.805-10.825 28.932-21.626 5.722 17.415 12.733 44.39.174 61.086"/><path fill="#6CB52D" d="M23.186 86.921c-1.437 1.858-4.112 2.056-5.97.62-1.858-1.437-2.056-4.113-.62-5.97 1.437-1.858 4.113-2.056 5.97-.62 1.76 1.437 2.057 4.112.62 5.97"/></svg>
  );
  
  const FigmaIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="2em" height="2em"  viewBox="0 0 100 100"><path fill="#0ACF83" d="M33.333 100C42.533 100 50 92.533 50 83.333V66.667H33.333c-9.2 0-16.666 7.466-16.666 16.666S24.133 100 33.333 100"/><path fill="#A259FF" d="M16.667 50c0-9.2 7.466-16.667 16.666-16.667H50v33.334H33.333c-9.2 0-16.666-7.467-16.666-16.667"/><path fill="#F24E1E" d="M16.667 16.667C16.667 7.467 24.133 0 33.333 0H50v33.333H33.333c-9.2 0-16.666-7.466-16.666-16.666"/><path fill="#FF7262" d="M50 0h16.667c9.2 0 16.666 7.467 16.666 16.667s-7.466 16.666-16.666 16.666H50z"/><path fill="#1ABCFE" d="M83.333 50c0 9.2-7.466 16.667-16.666 16.667S50 59.2 50 50s7.467-16.667 16.667-16.667S83.333 40.8 83.333 50"/></svg>
  );
  
  /* Coral -> purple */
  const CoralIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="2em" height="2em"  viewBox="0 0 100 100"><path fill="#FFA000" d="m61.405 36.118-10 9.311-9.284-18.733 4.796-10.77c1.212-2.15 3.194-2.177 4.407 0z"/><path fill="#F57F17" d="M51.409 45.425 14 80.22l28.126-53.523z"/><path fill="#FFCA28" d="M72.371 21.877c1.792-1.707 3.636-1.131 4.103 1.293l9.725 56.58-32.257 19.364c-1.13.633-4.13.88-4.13.88s-2.729-.332-3.774-.908L14 80.219z"/><path fill="#FFA000" d="M42.126 26.697 14 80.219 26.535 1.99c.47-2.425 1.844-2.672 3.084-.524z"/></svg>
  );
  
  /* The rest of the brand icons left intact unless you want full purple flattening. */
  const PalmTreeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="2em" height="2em"  viewBox="0 0 100 100"><path fill="#8CC84B" d="M46.279 1.067c2.479-1.42 5.709-1.426 8.186 0 12.464 7.042 24.931 14.074 37.393 21.12 2.343 1.321 3.911 3.93 3.887 6.63v42.371c.018 2.813-1.705 5.483-4.178 6.774-12.422 7.004-24.838 14.016-37.259 21.02-2.53 1.447-5.825 1.335-8.277-.23-3.724-2.16-7.455-4.308-11.18-6.465-.76-.453-1.619-.815-2.156-1.552.475-.64 1.324-.72 2.015-1 1.554-.495 2.982-1.288 4.41-2.058.361-.247.802-.152 1.148.069 3.185 1.826 6.342 3.705 9.537 5.513.682.394 1.372-.129 1.955-.453 12.19-6.89 24.396-13.754 36.584-20.646a1.21 1.21 0 0 0 .664-1.191c.009-13.977.002-27.957.005-41.934a1.31 1.31 0 0 0-.781-1.308C75.852 20.756 63.479 13.773 51.102 6.8a1.29 1.29 0 0 0-1.458-.002c-12.378 6.975-24.749 13.964-37.126 20.935-.506.23-.845.738-.785 1.302q.002 20.966 0 41.936a1.19 1.19 0 0 0 .673 1.176c3.303 1.873 6.61 3.733 9.916 5.6 1.861 1.002 4.148 1.597 6.199.83 1.81-.65 3.08-2.497 3.045-4.42.017-13.895-.009-27.793.013-41.686-.046-.617.54-1.127 1.14-1.069 1.586-.01 3.175-.021 4.762.005.663-.015 1.119.649 1.037 1.27-.007 13.984.017 27.968-.01 41.952.003 3.726-1.528 7.781-4.975 9.605-4.247 2.2-9.496 1.733-13.691-.376-3.632-1.813-7.098-3.952-10.666-5.894C6.697 76.68 4.983 73.999 5 71.189V28.817c-.026-2.756 1.604-5.412 4.021-6.713Q27.651 11.588 46.28 1.067"/><path fill="#8CC84B" d="M57.114 30.417c5.417-.348 11.216-.206 16.091 2.462 3.774 2.046 5.867 6.338 5.933 10.53-.105.566-.696.878-1.236.84-1.572-.003-3.144.02-4.716-.011-.667.025-1.054-.59-1.138-1.179-.451-2.006-1.545-3.993-3.434-4.96-2.898-1.452-6.26-1.38-9.42-1.349-2.308.123-4.79.322-6.744 1.68-1.5 1.027-1.957 3.102-1.421 4.773.505 1.2 1.89 1.587 3.023 1.944 6.529 1.708 13.447 1.538 19.85 3.785 2.651.916 5.245 2.697 6.152 5.472 1.187 3.72.667 8.168-1.98 11.154-2.146 2.458-5.273 3.796-8.39 4.522-4.149.925-8.454.949-12.666.538-3.962-.451-8.084-1.492-11.142-4.191-2.614-2.27-3.892-5.808-3.765-9.223.03-.576.605-.978 1.157-.93 1.583-.014 3.165-.018 4.748.001.632-.045 1.101.501 1.133 1.097.292 1.912 1.01 3.918 2.678 5.051 3.216 2.075 7.253 1.933 10.936 1.991 3.052-.135 6.477-.176 8.967-2.193 1.314-1.15 1.703-3.075 1.348-4.73-.384-1.398-1.847-2.05-3.103-2.476-6.444-2.038-13.44-1.299-19.822-3.604-2.59-.916-5.096-2.647-6.092-5.309-1.389-3.767-.752-8.427 2.172-11.313 2.852-2.87 6.968-3.976 10.881-4.372"/></svg>
  );
  
  const FlowerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="2em" height="2em"  viewBox="0 0 100 100"><path fill="url(#a)" d="m97.14 16.796-3.515 53.125L61.203-.001zm-22.656 68.75L50.266 99.609l-24.61-14.063 4.688-12.11h39.453zM50.266 26.562l12.5 31.25H37.375zM6.516 69.92 3 16.796 38.938-.001z"/><path fill="url(#b)" d="m97.14 16.796-3.515 53.125L61.203-.001zm-22.656 68.75L50.266 99.609l-24.61-14.063 4.688-12.11h39.453zM50.266 26.562l12.5 31.25H37.375zM6.516 69.92 3 16.796 38.938-.001z"/><defs><linearGradient id="a" x1="23.781" x2="98.703" y1="90.585" y2="54.96" gradientUnits="userSpaceOnUse"><stop stop-color="#E40035"/><stop offset=".2" stop-color="#F60A48"/><stop offset=".4" stop-color="#F20755"/><stop offset=".5" stop-color="#DC087D"/><stop offset=".7" stop-color="#9717E7"/><stop offset="1" stop-color="#6C00F5"/></linearGradient><linearGradient id="b" x1="20.383" x2="69.406" y1="11.991" y2="67.968" gradientUnits="userSpaceOnUse"><stop stop-color="#FF31D9"/><stop offset="1" stop-color="#FF5BE1" stop-opacity="0"/></linearGradient></defs></svg>
  );
  
  const PerplexityIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="2em" height="2em"  viewBox="0 0 100 100"><path fill="#599636" d="m50.146.273 2.668 5.012c.6.925 1.25 1.744 2.016 2.506a70 70 0 0 1 6.262 7.08c4.521 5.938 7.57 12.531 9.749 19.662 1.306 4.356 2.015 8.824 2.069 13.343.218 13.508-4.413 25.107-13.75 34.747a40 40 0 0 1-4.905 4.194c-.925 0-1.363-.71-1.744-1.363a11.2 11.2 0 0 1-1.362-3.921c-.328-1.635-.544-3.269-.438-4.956v-.763c-.075-.162-.89-75.157-.566-75.541"/><path fill="#6CAC48" d="M50.146.108c-.11-.22-.22-.054-.329.053.053 1.093-.328 2.068-.925 3-.656.924-1.524 1.634-2.396 2.396-4.844 4.194-8.656 9.259-11.709 14.924-4.062 7.624-6.156 15.796-6.75 24.398-.271 3.103.982 14.052 1.96 17.211 2.669 8.387 7.462 15.415 13.67 21.515 1.526 1.468 3.157 2.83 4.844 4.14.49 0 .544-.438.656-.763a15 15 0 0 0 .491-2.124l1.094-8.169z"/><path fill="#C2BFBF" d="M52.814 90.135c.11-1.25.71-2.287 1.362-3.321-.656-.272-1.143-.813-1.524-1.416-.33-.57-.601-1.173-.813-1.797-.762-2.287-.925-4.687-1.143-7.024V75.16c-.272.22-.329 2.069-.329 2.344a54 54 0 0 1-.98 7.353c-.163.98-.273 1.959-.876 2.83 0 .11 0 .22.053.382.981 2.887 1.25 5.827 1.416 8.824v1.094c0 1.306-.053 1.03 1.031 1.468.438.163.925.22 1.362.544.329 0 .382-.272.382-.49l-.163-1.797V92.7c-.053-.875.11-1.744.219-2.563z"/></svg>
  );
  
  /* Keep GitHub & Slack & Discord as-is (brand icons) for recognizability */
  const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg"  width="2em" height="2em" fill="none" viewBox="0 0 100 100"><path fill="#fff" d="M50 1C22.39 1 0 23.386 0 51c0 22.092 14.326 40.834 34.193 47.446 2.499.462 3.416-1.085 3.416-2.406 0-1.192-.046-5.131-.067-9.309-13.91 3.025-16.846-5.9-16.846-5.9-2.274-5.779-5.552-7.315-5.552-7.315-4.536-3.104.342-3.04.342-3.04 5.021.353 7.665 5.153 7.665 5.153 4.46 7.644 11.697 5.434 14.55 4.156.449-3.232 1.745-5.437 3.175-6.686-11.106-1.264-22.78-5.552-22.78-24.71 0-5.459 1.953-9.92 5.151-13.42-.519-1.26-2.23-6.346.485-13.233 0 0 4.198-1.344 13.753 5.125 3.988-1.108 8.266-1.663 12.515-1.682 4.25.019 8.53.574 12.526 1.682 9.543-6.469 13.736-5.125 13.736-5.125 2.722 6.887 1.01 11.973.49 13.232 3.206 3.502 5.146 7.962 5.146 13.42 0 19.205-11.697 23.434-22.83 24.671 1.793 1.552 3.39 4.595 3.39 9.26 0 6.69-.057 12.074-.057 13.721 0 1.33.9 2.89 3.434 2.399C85.691 91.819 100 73.085 100 51c0-27.614-22.386-50-50-50"/><path fill="#fff" d="M18.727 72.227c-.11.248-.502.322-.857.152-.363-.163-.567-.502-.45-.751.108-.256.5-.327.862-.156.363.163.57.505.445.755m2.459 2.194c-.238.221-.705.118-1.021-.231-.327-.349-.388-.814-.146-1.04.245-.22.698-.117 1.025.232.328.353.391.816.142 1.04zm1.687 2.808c-.306.213-.807.013-1.117-.432-.306-.444-.306-.977.007-1.191.31-.214.804-.021 1.117.42.306.452.306.985-.007 1.203m2.854 3.252c-.274.302-.858.22-1.285-.192-.437-.403-.56-.975-.284-1.277.277-.303.864-.218 1.294.191.435.403.567.979.275 1.278m3.687 1.098c-.12.391-.682.57-1.249.403-.565-.171-.935-.63-.821-1.026.117-.394.682-.58 1.253-.401.564.17.935.625.818 1.024m4.198.465c.014.413-.466.755-1.06.762-.599.013-1.082-.32-1.089-.726 0-.416.47-.755 1.067-.765.595-.012 1.082.32 1.082.73m4.123-.158c.071.403-.342.816-.932.926-.58.106-1.118-.143-1.192-.541-.072-.413.349-.826.928-.933.591-.103 1.12.14 1.196.548"/></svg>
  );
  const SlackIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none"  width="2em" height="2em" viewBox="0 0 101 100"><path fill="#61DAFB" d="M50.307 58.816a8.816 8.816 0 1 0 0-17.632 8.816 8.816 0 0 0 0 17.632"/><path stroke="#61DAFB" stroke-width="5" d="M50.307 68.063c26.126 0 47.306-8.087 47.306-18.063s-21.18-18.062-47.306-18.062C24.18 31.938 3 40.024 3 50s21.18 18.063 47.307 18.063Z"/><path stroke="#61DAFB" stroke-width="5" d="M34.664 59.031C47.727 81.658 65.321 95.957 73.96 90.97c8.64-4.988 5.053-27.374-8.01-50C52.885 18.342 35.291 4.043 26.652 9.03s-5.052 27.374 8.011 50Z"/><path stroke="#61DAFB" stroke-width="5" d="M34.664 40.969c-13.063 22.626-16.65 45.012-8.01 50 8.638 4.988 26.232-9.311 39.295-31.938s16.65-45.012 8.01-50c-8.638-4.988-26.232 9.311-39.295 31.938Z"/></svg>
  );
  const DiscordIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="2em" height="2em" viewBox="0 0 100 100"><path fill="#FF2D20" d="M98.494 22.485q.054.2.054.406v21.335a1.56 1.56 0 0 1-.782 1.349L79.86 55.885v20.433a1.56 1.56 0 0 1-.777 1.35L41.705 99.184c-.085.049-.179.08-.272.113-.035.012-.068.033-.105.043a1.6 1.6 0 0 1-.797 0c-.043-.012-.082-.035-.123-.05-.085-.032-.175-.059-.256-.106L2.782 77.668A1.56 1.56 0 0 1 2 76.318V12.316q.001-.21.055-.409c.011-.044.039-.085.054-.13.03-.082.057-.165.1-.241.028-.05.071-.091.106-.138.045-.062.086-.127.138-.18.045-.046.103-.079.154-.118.056-.046.107-.097.171-.134h.002L21.466.208a1.56 1.56 0 0 1 1.555 0l18.686 10.758h.004c.062.04.115.088.171.133.05.038.107.073.152.116.054.056.093.12.14.183.033.047.078.087.105.138.044.078.07.16.1.241.017.045.044.086.055.132q.054.2.055.407V52.29l15.57-8.966V22.89c0-.136.02-.274.055-.404.014-.047.039-.087.055-.132.03-.082.058-.166.1-.241.03-.05.073-.092.106-.138.046-.063.085-.127.14-.181.044-.045.1-.078.151-.117.059-.047.11-.097.171-.134h.002l18.688-10.759a1.56 1.56 0 0 1 1.556 0l18.686 10.759c.066.039.116.087.174.132.05.04.106.074.15.117.055.056.093.12.14.183.035.046.078.087.105.138.045.076.07.16.101.24.018.046.043.086.055.133m-3.06 20.84v-17.74l-6.54 3.764-9.034 5.201v17.74l15.575-8.965zM76.746 75.418V57.665l-8.885 5.075-25.375 14.482v17.92zM5.115 15.008v60.41L39.372 95.14V77.224L21.476 67.096l-.006-.004-.008-.004c-.06-.035-.11-.086-.167-.128-.049-.04-.105-.07-.148-.113l-.004-.006c-.05-.049-.085-.109-.128-.163-.04-.053-.086-.097-.117-.152l-.002-.006c-.035-.058-.056-.128-.082-.194-.025-.059-.058-.113-.073-.175v-.002c-.02-.074-.024-.152-.032-.228-.007-.058-.023-.116-.023-.175V23.974l-9.032-5.203-6.539-3.76zm17.13-11.654L6.678 12.316l15.565 8.962 15.567-8.964-15.567-8.96zm8.097 55.93 9.032-5.2V15.009l-6.54 3.764-9.033 5.201V63.05zM78.305 13.93l-15.567 8.96 15.567 8.962L93.87 22.89zm-1.558 20.62-9.033-5.201-6.54-3.765v17.741l9.032 5.2 6.541 3.766zm-35.82 39.98 22.834-13.036 11.413-6.514-15.555-8.956-17.91 10.311-16.323 9.398z"/></svg>
  );
  
  /* Center icon stays multi-color but tinted overlay already added in CSS; leaving original */
  
  
  const CenterFlowerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="2.8em" height="2.8em" viewBox="0 0 100 100"><path fill="#E535AB" fill-rule="evenodd" d="m58.972 11.444 20.535 11.857a9 9 0 0 1 2.02-1.599c4.259-2.448 9.69-.994 12.165 3.265 2.448 4.259.994 9.69-3.265 12.164a9 9 0 0 1-2.371.944v23.722c.822.2 1.612.516 2.346.938 4.284 2.474 5.738 7.906 3.264 12.165-2.448 4.258-7.906 5.712-12.165 3.264a8.8 8.8 0 0 1-2.2-1.787L58.89 88.161a9 9 0 0 1 .45 2.805c0 4.896-3.979 8.9-8.901 8.9a8.89 8.89 0 0 1-8.9-8.9c0-.875.126-1.72.36-2.518L21.37 76.595a9 9 0 0 1-1.992 1.57c-4.284 2.447-9.716.993-12.164-3.265-2.448-4.26-.995-9.691 3.264-12.165a9 9 0 0 1 2.346-.938V38.075a9 9 0 0 1-2.371-.944c-4.26-2.448-5.713-7.905-3.265-12.164 2.449-4.26 7.906-5.713 12.165-3.265.742.43 1.42.966 2.01 1.589l20.54-11.86a9 9 0 0 1-.363-2.53C41.54 3.978 45.518 0 50.44 0s8.9 3.978 8.9 8.9c0 .885-.128 1.739-.368 2.544m-2.139 3.653 20.584 11.885a8.9 8.9 0 0 0 .846 6.885 8.85 8.85 0 0 0 5.56 4.188v23.75q-.174.044-.345.092L56.594 15.335a9 9 0 0 0 .24-.238m-12.541.244L17.408 61.9a9 9 0 0 0-.35-.093V38.054a8.85 8.85 0 0 0 5.559-4.187 8.9 8.9 0 0 0 .843-6.898l20.578-11.881q.123.129.254.253m8.635 2.109L79.804 64a8.9 8.9 0 0 0-2.505 4.345H23.582a9 9 0 0 0-.94-2.346 9 9 0 0 0-1.564-1.987l26.883-46.56c.806.232 1.64.35 2.479.348.863 0 1.698-.122 2.487-.35m4.095 67.52 20.45-11.807a9 9 0 0 1-.164-.584H23.57q-.043.174-.092.344l20.55 11.865a8.87 8.87 0 0 1 6.412-2.722 8.88 8.88 0 0 1 6.582 2.904" clip-rule="evenodd"/></svg>
  );
  
  /* ------------------ ICON WRAPPER ------------------ */
  const IconWrapper = ({
    children,
    className = "",
    isHighlighted = false,
    isActive = false,
  }) => (
    <div
      className={`
        backdrop-blur-xl rounded-2xl flex items-center justify-center border
        ${
          isHighlighted
            ? "dark:bg-gray-700/50 bg-gray-100/80 border-[#E17EFF]/50 dark:shadow-[#E17EFF]/20 shadow-[#E17EFF]/30 shadow-2xl animate-breathing-glow"
            : `dark:bg-white/5 bg-white/60 dark:border-white/20 border-gray-300/60 ${
                !isActive && "animate-float"
              }`
        }
        ${isActive && "border-[#C98CF7]/60"}
        ${className}
      `}
      style={{
        transform: isActive ? "scale(1.1)" : "scale(1)",
        backgroundColor: isActive
          ? "rgba(225,126,255,0.2)"
          : "rgba(255,255,255,0.05)",
        transition:
          "transform 0.8s ease-in-out, background-color 0.8s ease-in-out, border-color 0.8s ease-in-out",
      }}
    >
      {children}
    </div>
  );
  
  /* ------------------ ICON GRID ------------------ */
  const IconGrid = () => {
    const [activeId, setActiveId] = useState(1);
    const canvasRef = useRef(null);
    const particlesRef = useRef([]);
  
    const outerIcons = useMemo(
      () => [
        { id: 1, component: <SparkleIcon /> },
        { id: 2, component: <FigmaIcon /> },
        { id: 3, component: <CoralIcon /> },
        { id: 4, component: <SlackIcon /> },
        { id: 5, component: <PalmTreeIcon /> },
        { id: 6, component: <GitHubIcon /> },
        { id: 7, component: <FlowerIcon /> },
        { id: 8, component: <PerplexityIcon /> },
        { id: 9, component: <DiscordIcon /> },
      ],
      []
    );
  
    const radius = 160;
    const svgSize = 400;
    const svgCenter = svgSize / 2;
    const numIcons = outerIcons.length;
  
    const getIconPosition = useCallback(
      (index) => {
        const angle = (-90 + index * (360 / numIcons)) * (Math.PI / 180);
        return {
          transformX: radius * Math.cos(angle),
          transformY: radius * Math.sin(angle),
          svgX: svgCenter + radius * Math.cos(angle),
          svgY: svgCenter + radius * Math.sin(angle),
        };
      },
      [numIcons]
    );
  
    /* Particle renderer (now purple) */
    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      let animationFrameId;
      const render = () => {
        ctx.clearRect(0, 0, svgSize, svgSize);
        particlesRef.current.forEach((p, index) => {
          p.x += p.vx;
          p.y += p.vy;
          p.life -= 1;
          if (p.life <= 0) {
            particlesRef.current.splice(index, 1);
          } else {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2, false);
            ctx.fillStyle = `rgba(225,126,255,${p.life / 60})`; // purple glow
            ctx.fill();
          }
        });
        animationFrameId = window.requestAnimationFrame(render);
      };
      render();
      return () => window.cancelAnimationFrame(animationFrameId);
    }, []);
  
    /* Rotate active icon + spawn particles */
    useEffect(() => {
      const interval = setInterval(() => {
        setActiveId((prevId) => {
          const currentIndex = outerIcons.findIndex((icon) => icon.id === prevId);
          const nextIndex = (currentIndex + 1) % outerIcons.length;
          const pos = getIconPosition(nextIndex);
          const iconCenterX = svgCenter + pos.transformX;
          const iconCenterY = svgCenter + pos.transformY;
          for (let i = 0; i < 20; i++) {
            particlesRef.current.push({
              x: iconCenterX,
              y: iconCenterY,
              vx: (Math.random() - 0.5) * 2,
              vy: (Math.random() - 0.5) * 2,
              size: Math.random() * 2 + 1,
              life: Math.random() * 60,
            });
          }
          return outerIcons[nextIndex].id;
        });
      }, 2500);
      return () => clearInterval(interval);
    }, [outerIcons, getIconPosition]);
  
    return (
      <div className="relative w-[400px] h-[400px] scale-75 md:scale-90 lg:scale-100">
        <canvas
          ref={canvasRef}
          width={svgSize}
          height={svgSize}
          className="absolute top-0 left-0 pointer-events-none z-10"
        />
  
        {/* Connecting lines */}
        <svg width={svgSize} height={svgSize} className="absolute top-0 left-0">
          <defs>
            <filter id="glow_v6">
              <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <g>
            {outerIcons.map((icon1, i) => {
              const p1 = getIconPosition(i);
              return outerIcons.map((icon2, j) => {
                if (i >= j) return null;
                const p2 = getIconPosition(j);
                const isLineActive = activeId === icon1.id || activeId === icon2.id;
                return (
                  <line
                    key={`line-${i}-${j}`}
                    x1={p1.svgX}
                    y1={p1.svgY}
                    x2={p2.svgX}
                    y2={p2.svgY}
                    strokeWidth="1.5"
                    style={{
                      stroke: isLineActive ? "#E17EFF" : "#C98CF7",
                      opacity: isLineActive ? 0.85 : 0.15,
                      filter: isLineActive ? "url(#glow_v6)" : "none",
                      transition: "all 1.2s ease-in-out",
                    }}
                  />
                );
              });
            })}
          </g>
        </svg>
  
        {/* Icon positions */}
        <div className="absolute top-1/2 left-1/2">
          {/* Center icon */}
          <div className="absolute -translate-x-1/2 -translate-y-1/2 z-20">
            <IconWrapper className="w-24 h-24 p-4" isHighlighted>
              <CenterFlowerIcon />
            </IconWrapper>
          </div>
  
          {/* Outer icons */}
          {outerIcons.map((icon, i) => {
            const { transformX, transformY } = getIconPosition(i);
            const isActive = activeId === icon.id;
            return (
              <div
                key={icon.id}
                className="absolute z-20"
                style={{
                  top: 0,
                  left: 0,
                  transform: `translate(${transformX}px, ${transformY}px)`,
                  transition: "transform 1.5s cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                <div className="-translate-x-1/2 -translate-y-1/2 relative">
                  {/* Glow aura */}
                  <div
                    className="absolute inset-[-20px] bg-[#E17EFF]/20 dark:bg-[#E17EFF]/30 rounded-full blur-2xl"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transition: "opacity 0.8s ease-in-out",
                    }}
                  />
                  <IconWrapper className="w-16 h-16" isActive={isActive}>
                    {icon.component}
                  </IconWrapper>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  
  /* ------------------ MAIN WRAPPER ------------------ */
  export default function NexusOrbSup() {
    return (
      <div className="w-full flex items-center justify-center font-sans p-4 sm:p-8 overflow-hidden">
        {/* Inline purple animation styles */}
        <style>
          {`
            :root {
              --orb-purple-main: #E17EFF;
              --orb-purple-mid: #C98CF7;
              --orb-purple-dark: #A84EFF;
              --orb-purple-light: #F0D9FF;
            }
  
            @keyframes float {
              0% { transform: translateY(0px); }
              50% { transform: translateY(-8px); }
              100% { transform: translateY(0px); }
            }
            .animate-float {
              animation: float 6s ease-in-out infinite;
            }
  
            @keyframes breathing-glow {
              0%   { box-shadow: 0 0 20px 0px rgba(225,126,255,0.4); filter: drop-shadow(0 0 5px rgba(201,140,247,0.3)); }
              50%  { box-shadow: 0 0 35px 10px rgba(201,140,247,0.2); filter: drop-shadow(0 0 15px rgba(240,217,255,0.2)); }
              100% { box-shadow: 0 0 20px 0px rgba(225,126,255,0.4); filter: drop-shadow(0 0 5px rgba(201,140,247,0.3)); }
            }
  
            @keyframes breathing-glow-light {
              0%   { box-shadow: 0 0 20px 0px rgba(225,126,255,0.3); filter: drop-shadow(0 0 5px rgba(201,140,247,0.2)); }
              50%  { box-shadow: 0 0 35px 10px rgba(201,140,247,0.1); filter: drop-shadow(0 0 15px rgba(240,217,255,0.1)); }
              100% { box-shadow: 0 0 20px 0px rgba(225,126,255,0.3); filter: drop-shadow(0 0 5px rgba(201,140,247,0.2)); }
            }
  
            .animate-breathing-glow {
              animation: breathing-glow 4s ease-in-out infinite;
            }
            .dark .animate-breathing-glow {
              animation: breathing-glow 4s ease-in-out infinite;
            }
            :not(.dark) .animate-breathing-glow {
              animation: breathing-glow-light 4s ease-in-out infinite;
            }
          `}
        </style>
  
        {/* subtle radial background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(225,126,255,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(225,126,255,0.3),rgba(255,255,255,0))]" />
        </div>
  
        <div className="relative z-10 container mx-auto flex items-center justify-center">
          <IconGrid />
        </div>
      </div>
    );
  }
  