<template>
    <div class="brand-logo">
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 226.99 207.99">
            <path d="M0,0H227q0,104,0,208H0ZM83.3,188.46h34.8c.41-2.34.77-4.38,1.13-6.4l7.1-.83v-34.7l-7.18-.81L118,138.94H92.31V113h-9ZM19.66,164.12v16.71L27,182.15l1,6.22H59.49V146.72l-7.27-.93-.75-6.3H28.9v8.65H50.49v8.21H28.14L26.83,163Zm55.71-16.51H67.9v6.88h7C75.08,152.34,75.19,150.42,75.37,147.61Zm-7.45,33.56v7.33h7.31c-.12-2.61-.22-4.91-.33-7.33Z"
                  class="inverse" style="fill:#fff"/>
            <path style="fill:#000" d="M83.3,188.46V113h9v26H118l1.12,6.78,7.18.81v34.7l-7.1.83c-.36,2-.72,4.06-1.13,6.4Zm9.18-9.64h24.36V148.5H92.48Z"/>
            <path style="fill:#000" d="M19.66,164.12l7.17-1.1,1.31-6.67H50.49v-8.21H28.9v-8.65H51.47l.75,6.3,7.27.93v41.65H28l-1-6.22-7.34-1.32Zm30.85,2.16H29.32V178.9H50.51Z"/>
            <path style="fill:#000" d="M75.37,147.61c-.18,2.81-.29,4.73-.43,6.88h-7v-6.88Z"/>
            <path style="fill:#000" d="M67.92,181.17h7c.11,2.42.21,4.72.33,7.33H67.92Z"/>
            <path class="inverse" d="M92.48,178.82V148.5h24.36v30.32Z" style="fill:#fff"/>
            <path class="inverse" d="M50.51,166.28V178.9H29.32V166.28Z" style="fill:#fff"/>
        </svg>
    </div>
</template>

<script>
    export default {
        name: "brand-logo-compact"
    }
</script>

<style scoped lang="scss">
    .brand-logo {
        &.black {
            svg path {
                &.inverse {
                    fill: #000 !important;
                }

                &:not(.inverse) {
                    fill: #fff !important;
                }
            }
        }

        &.small {
            max-width: 280px;
        }

        &.centered {
            margin: 0 auto;
        }

        &.full-screen {
            max-height: calc(100vh - 40px);
        }
    }
</style>
