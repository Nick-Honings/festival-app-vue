<template>
    <sidebar-menu :menu="menu"
                  disable-hover
                  width="200px"
    >
    </sidebar-menu>
</template>

<script>
    export default {
        name: "Vx-Sidebar",
        data() {
            return {
                menu: [
                    {
                        header: true,
                        title: 'Main Navigation',
                        hiddenOnCollapse: true
                    },
                    {
                        href: '/dashboard',
                        title: 'Dashboard',
                        icon: 'favorite'
                    },
                    {
                        href: '/events',
                        title: 'Events',
                        icon: 'fa fa-user'
                    },

                    {
                        href: '/calendar',
                        title: 'Calendar',
                        icon: 'fa fa-chart-area',
                    },
                    {
                        href: '/finances',
                        title: 'Finances',
                        icon: 'fa fa-chart-area',
                    },
                    {
                        href: '/profile',
                        title: 'Profile',
                        icon: 'fa fa-chart-area',
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
