riot.tag2('sidebar', '<div class="navbar-default sidebar" role="navigation"> <div class="sidebar-nav navbar-collapse"> <ul class="nav" id="side-menu"> <li class="sidebar-search"> <div class="input-group custom-search-form"> <input type="text" class="form-control" placeholder="Search..."> <span class="input-group-btn"> <button class="btn btn-default" type="button"> <i class="fa fa-search"></i> </button> </span> </div> </li> <li> <a onclick="riot.route(\'\', \'Dashboard\')" class="active"><i class="fa fa-dashboard fa-fw"></i> Dashboard</a> </li> <li> <a onclick="riot.route(\'users-list\', \'Users list\')"><i class="fa fa-dashboard fa-fw"></i> Users list</a> </li> <li> <a onclick="riot.route(\'promotions\', \'Promotions management\')"><i class="fa fa-dashboard fa-fw"></i> Promotions management</a> </li> <li> <a onclick="riot.route(\'statistics\', \'Statistics\')"><i class="fa fa-dashboard fa-fw"></i> Statistics</a> </li> </ul> </div> </div>', '', '', function(opts) {
        var tag = this;
        tag.mixin(SharedMixin);

        tag.on('mount', function () {
            $('#side-menu>li>a').on('click', function (e) {
                $('#side-menu>li>a').removeClass('active');
                $(this).addClass('active');
            })
        });
});