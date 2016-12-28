<app>
    <div id="wrapper">
        <!-- Navigation -->
        <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
            <navbar></navbar>
            <sidebar></sidebar>
        </nav>

        <dashboard riotid="dashboard"></dashboard>
        <userslist riotid="users-list"></userslist>
        <promotions riotid="promotions"></promotions>
        <statistics riotid="statistics"></statistics>
        <advertisement riotid="advertisement"></advertisement>

    </div>
    <!-- /#wrapper -->

    <script>
        var tag = this;
        tag.mixin(SharedMixin);

        tag.on('mount', function () {
            console.log(riot);
            riot.route.base('/seller-app/');
            riot.route(function (page) {
                page = (page === '' || typeof page === 'undefined')? 'dashboard' : page;
                tag.showPage(page);
            });
            riot.route.start();
        });

        tag.showPage = function (pageId) {
            $('.page-wrapper').hide();
            $('#'+pageId).show();
        };
    </script>
</app>