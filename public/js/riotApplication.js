riot.tag2('app', '<div id="wrapper"> <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0"> <navbar></navbar> <sidebar></sidebar> </nav> <dashboard riotid="dashboard"></dashboard> <userslist riotid="users-list"></userslist> <promotions riotid="promotions"></promotions> <statistics riotid="statistics"></statistics> <advertisement riotid="advertisement"></advertisement> </div>', '', '', function(opts) {
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
});
riot.tag2('navbar', '<div class="navbar-header"> <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <a class="navbar-brand" href="/seller-app">MyVirtualCard</a> </div> <ul class="nav navbar-top-links navbar-right"> <li class="dropdown"> <a class="dropdown-toggle" data-toggle="dropdown" href="#"> <i class="fa fa-envelope fa-fw"></i> <i class="fa fa-caret-down"></i> </a> <ul class="dropdown-menu dropdown-messages"> <li> <a href="#"> <div> <strong>John Smith</strong> <span class="pull-right text-muted"> <em>Yesterday</em> </span> </div> <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div> </a> </li> <li class="divider"></li> <li> <a href="#"> <div> <strong>John Smith</strong> <span class="pull-right text-muted"> <em>Yesterday</em> </span> </div> <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div> </a> </li> <li class="divider"></li> <li> <a href="#"> <div> <strong>John Smith</strong> <span class="pull-right text-muted"> <em>Yesterday</em> </span> </div> <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div> </a> </li> <li class="divider"></li> <li> <a class="text-center" href="#"> <strong>Read All Messages</strong> <i class="fa fa-angle-right"></i> </a> </li> </ul> </li> <li class="dropdown"> <a class="dropdown-toggle" data-toggle="dropdown" href="#"> <i class="fa fa-tasks fa-fw"></i> <i class="fa fa-caret-down"></i> </a> <ul class="dropdown-menu dropdown-tasks"> <li> <a href="#"> <div> <p> <strong>Task 1</strong> <span class="pull-right text-muted">40% Complete</span> </p> <div class="progress progress-striped active"> <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%"> <span class="sr-only">40% Complete (success)</span> </div> </div> </div> </a> </li> <li class="divider"></li> <li> <a href="#"> <div> <p> <strong>Task 2</strong> <span class="pull-right text-muted">20% Complete</span> </p> <div class="progress progress-striped active"> <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%"> <span class="sr-only">20% Complete</span> </div> </div> </div> </a> </li> <li class="divider"></li> <li> <a href="#"> <div> <p> <strong>Task 3</strong> <span class="pull-right text-muted">60% Complete</span> </p> <div class="progress progress-striped active"> <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%"> <span class="sr-only">60% Complete (warning)</span> </div> </div> </div> </a> </li> <li class="divider"></li> <li> <a href="#"> <div> <p> <strong>Task 4</strong> <span class="pull-right text-muted">80% Complete</span> </p> <div class="progress progress-striped active"> <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%"> <span class="sr-only">80% Complete (danger)</span> </div> </div> </div> </a> </li> <li class="divider"></li> <li> <a class="text-center" href="#"> <strong>See All Tasks</strong> <i class="fa fa-angle-right"></i> </a> </li> </ul> </li> <li class="dropdown"> <a class="dropdown-toggle" data-toggle="dropdown" href="#"> <i class="fa fa-bell fa-fw"></i> <i class="fa fa-caret-down"></i> </a> <ul class="dropdown-menu dropdown-alerts"> <li> <a href="#"> <div> <i class="fa fa-comment fa-fw"></i> New Comment <span class="pull-right text-muted small">4 minutes ago</span> </div> </a> </li> <li class="divider"></li> <li> <a href="#"> <div> <i class="fa fa-twitter fa-fw"></i> 3 New Followers <span class="pull-right text-muted small">12 minutes ago</span> </div> </a> </li> <li class="divider"></li> <li> <a href="#"> <div> <i class="fa fa-envelope fa-fw"></i> Message Sent <span class="pull-right text-muted small">4 minutes ago</span> </div> </a> </li> <li class="divider"></li> <li> <a href="#"> <div> <i class="fa fa-tasks fa-fw"></i> New Task <span class="pull-right text-muted small">4 minutes ago</span> </div> </a> </li> <li class="divider"></li> <li> <a href="#"> <div> <i class="fa fa-upload fa-fw"></i> Server Rebooted <span class="pull-right text-muted small">4 minutes ago</span> </div> </a> </li> <li class="divider"></li> <li> <a class="text-center" href="#"> <strong>See All Alerts</strong> <i class="fa fa-angle-right"></i> </a> </li> </ul> </li> <li class="dropdown"> <a class="dropdown-toggle" data-toggle="dropdown" href="#"> <i class="fa fa-user fa-fw"></i> <i class="fa fa-caret-down"></i> </a> <ul class="dropdown-menu dropdown-user"> <li><a href="#"><i class="fa fa-user fa-fw"></i> User Profile</a> </li> <li><a href="#"><i class="fa fa-gear fa-fw"></i> Settings</a> </li> <li class="divider"></li> <li><a href="/seller-login"><i class="fa fa-sign-out fa-fw"></i> Logout</a> </li> </ul> </li> </ul>', '', '', function(opts) {
});
riot.tag2('sidebar', '<div class="navbar-default sidebar" role="navigation"> <div class="sidebar-nav navbar-collapse"> <ul class="nav" id="side-menu"> <li class="sidebar-search"> <div class="input-group custom-search-form"> <input type="text" class="form-control" placeholder="Search..."> <span class="input-group-btn"> <button class="btn btn-default" type="button"> <i class="fa fa-search"></i> </button> </span> </div> </li> <li> <a onclick="riot.route(\'\', \'Dashboard\')" class="active"><i class="fa fa-dashboard fa-fw"></i> Dashboard</a> </li> <li> <a onclick="riot.route(\'users-list\', \'Users list\')"><i class="fa fa-users fa-fw"></i> Users list</a> </li> <li> <a onclick="riot.route(\'promotions\', \'Promotions management\')"><i class="fa fa-ticket fa-fw"></i> Promotions management</a> </li> <li> <a onclick="riot.route(\'advertisement\', \'Advertisement\')"><i class="fa fa-bullhorn fa-fw"></i> Advertisement</a> </li> <li> <a onclick="riot.route(\'statistics\', \'Statistics\')"><i class="fa fa-line-chart fa-fw"></i> Statistics</a> </li> </ul> </div> </div>', '', '', function(opts) {
        var tag = this;
        tag.mixin(SharedMixin);

        tag.on('mount', function () {
            $('#side-menu>li>a').on('click', function (e) {
                $('#side-menu>li>a').removeClass('active');
                $(this).addClass('active');
            })
        });
});
riot.tag2('dashboard', '<div class="page-wrapper" id="dashboard"> <div class="row"> <div class="col-lg-12"> <h1 class="page-header">Dashboard</h1> </div> </div> <div class="row"> <div class="col-lg-offset-1 col-lg-4 col-md-6"> <div class="panel panel-primary"> <div class="panel-heading"> <div class="row"> <div class="col-xs-3"> <i class="fa fa-users fa-5x"></i> </div> <div class="col-xs-9 text-right"> <div class="huge">26</div> <div>New users today!</div> </div> </div> </div> <a style="cursor: pointer" onclick="riot.route(\'users-list\', \'Users list\')"> <div class="panel-footer"> <span class="pull-left">View Details</span> <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span> <div class="clearfix"></div> </div> </a> </div> </div> <div class="col-lg-offset-1 col-lg-4 col-md-6"> <div class="panel panel-green"> <div class="panel-heading"> <div class="row"> <div class="col-xs-3"> <i class="fa fa-ticket fa-5x"></i> </div> <div class="col-xs-9 text-right"> <div class="huge">2</div> <div>Active promotions.</div> </div> </div> </div> <a style="cursor: pointer" onclick="riot.route(\'promotions\', \'Promotions management\')"> <div class="panel-footer"> <span class="pull-left">View Details</span> <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span> <div class="clearfix"></div> </div> </a> </div> </div> <div class="col-lg-offset-1 col-lg-4 col-md-6"> <div class="panel panel-yellow"> <div class="panel-heading"> <div class="row"> <div class="col-xs-3"> <i class="fa fa-bullhorn fa-5x"></i> </div> <div class="col-xs-9 text-right"> <div class="huge">1</div> <div>Active advertisement.</div> </div> </div> </div> <a style="cursor: pointer;" onclick="riot.route(\'advertisement\', \'Advertisement\')"> <div class="panel-footer"> <span class="pull-left">View Details</span> <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span> <div class="clearfix"></div> </div> </a> </div> </div> <div class="col-lg-offset-1 col-lg-4 col-md-6"> <div class="panel panel-red"> <div class="panel-heading"> <div class="row"> <div class="col-xs-3"> <i class="fa fa-support fa-5x"></i> </div> <div class="col-xs-9 text-right"> <div class="huge">5</div> <div>Active monitors.</div> </div> </div> </div> <a style="cursor: pointer;" onclick="riot.route(\'statistics\', \'Statistics\')"> <div class="panel-footer"> <span class="pull-left">View Details</span> <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span> <div class="clearfix"></div> </div> </a> </div> </div> </div> </div>', '', '', function(opts) {
});
riot.tag2('advertisement', '<div class="page-wrapper" id="{opts.riotid}" style="display: none"> <div class="row"> <div class="col-lg-12"> <h1 class="page-header">Advertisement</h1> </div> </div> <div class="row"> <div class="col-lg-3"> <button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#addCampaignModal"> Create new campaign </button> </div> </div> <div class="row" style="padding-top: 10px"> <div class="col-lg-12"> <div class="panel panel-default"> <div class="panel-heading"> Promotions </div> <div class="panel-body"> <div class="table-responsive"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th>#</th> <th>Name</th> <th>Type</th> <th>Nr. Views</th> <th>Investment</th> <th>Starting date</th> <th>Stopping date</th> <th>Active</th> <th></th> </tr> </thead> <tbody> <tr each="{campaign, key in campaigns}"> <td>{key+1}</td> <td>{campaign.name}</td> <td>{campaign.type}</td> <td>{campaign.nrViews}</td> <td>{campaign.investment} €</td> <td>{campaign.startingDate}</td> <td>{campaign.stoppingDate}</td> <td><input type="checkbox" checked="{campaign.active}" disabled></td> <td><a style="cursor: pointer;" onclick="{editCampaign.bind(this, key)}" data-promotionid="{key}"><i class="fa fa-pencil" aria-hidden="true"></i></a> <a style="cursor: pointer" onclick="{deleteCampaign.bind(this, key)}"><i class="fa fa-trash" aria-hidden="true"></i></a></td> </tr> </tbody> </table> </div> </div> </div> </div> </div> <div class="modal fade" id="addCampaignModal" tabindex="-1" role="dialog" aria-labelledby="addCampaignModalLabel" aria-hidden="true" style="display: none;"> <div class="modal-dialog"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button> <h4 class="modal-title" id="addCampaignModalLabel">Create new adv campaign</h4> </div> <div class="modal-body"> <form role="form"> <input id="campaignId" name="campaignId" type="text" style="display: none" value=""> <div class="form-group"> <label>Campaign name</label> <input class="form-control" name="name" id="campaignName" placeholder="Campaign name"> </div> <div class="form-group"> <label>Type</label> <select class="custom-select" name="type" id="campaignType"> <option selected>Open this select menu</option> <option value="Top banner">Top banner</option> <option value="Push notifications">Push notifications</option> <option value="Email">Email</option> <option value="SMS">SMS</option> </select> </div> <div class="form-group"> <label>Investment</label> <input class="form-control" name="investment" id="campaignInvestment" placeholder="Investment amount"> </div> <div class="form-group"> <label>Starting date. (Leave it blank if you don\'t want automated campaign.)</label> <input class="form-control" name="startingDate" id="campaignStartingDate" placeholder="Starting date"> </div> <div class="form-group"> <label>Stopping date. (Leave it blank if you don\'t want automated campaign.)</label> <input class="form-control" name="stoppingDate" id="campaignStoppingDate" placeholder="Stopping date"> </div> <div class="form-group"> <div class="checkbox"> <label> <input type="checkbox" name="active" id="campaignActive" value="1" checked>Active </label> </div> </div> </form> </div> <div class="modal-footer"> <button type="button" class="btn btn-default" data-dismiss="modal">Close</button> <button type="button" class="btn btn-primary" onclick="{createCampaign}">Save changes</button> </div> </div> </div> </div> </div> <script>', '', '', function(opts) {
        var tag = this;
        tag.on('mount', onMount) ;
        tag.createCampaign = createCampaign;
        tag.editCampaign = editCampaign;
        tag.deleteCampaign = deleteCampaign;
        tag.campaigns = [
            {
                key: 1,
                name: 'Student lunch',
                type: 'Push notifications',
                nrViews: '12',
                investment: '100',
                startingDate: '01-01-2017',
                stoppingDate: '01-02-2017',
                active: true

            }
        ];

        function createCampaign(){
            var campaignNameField = $('#campaignName');
            var campaignTypeField = $('#campaignType');

            campaignNameField.parent().removeClass('has-error');
            campaignTypeField.parent().removeClass('has-error');

            var campaignId = $('#campaignId').val();
            var campaignName = campaignNameField.val();
            var campaignType = campaignTypeField.val();

            if(campaignName===''){
                campaignNameField.parent().addClass('has-error');
            }else if(campaignType===''){
                campaignTypeField.parent().addClass('has-error');
            }else{
                var campaign ={
                    name: campaignName,
                    nrViews: 0,
                    investment: $('#campaignInvestment').val(),
                    type: campaignType,
                    startingDate: $('#campaignStartingDate').val(),
                    stoppingDate: $('#campaignStoppingDate').val(),
                    active: $('#campaignActive').is(':checked')
                };
                console.log(campaign);
                $('#addCampaignModal').modal('hide');
                if(campaignId!==''){
                    campaign.nrViews = tag.campaigns[parseInt(campaignId)].nrViews;
                    tag.campaigns[parseInt(campaignId)] = campaign
                }else{
                    tag.campaigns.push(campaign);
                }
                $('#campaignId').val('');
                tag.update();
            }

        }

        function editCampaign(id) {
            $('#campaignId').val(id);
            $('#campaignName').val(tag.campaigns[id].name);
            $('#campaignType').val(tag.campaigns[id].type);
            $('#campaignInvestment').val(tag.campaigns[id].investment);
            $('#campaignStartingDate').val(tag.campaigns[id].startingDate);
            $('#campaignStoppingDate').val(tag.campaigns[id].stoppingDate);
            $('#campaignActive').prop('checked', tag.campaigns[id].active);
            $('#addCampaignModal').modal('show');
        }

        function onMount() {
            $('#addCampaignModal').on('hidden.bs.modal', function () {
                $(this)
                        .find("input,textarea,select")
                        .val('')
                        .end()
                        .find("input[type=checkbox], input[type=radio]")
                        .prop("checked", "")
                        .end();
            })
        }

        function deleteCampaign(id) {
            var r = confirm('Are you sure?');
            if(r){
                tag.campaigns.splice(id, 1);
                tag.update();
            }
        }
});
riot.tag2('statistics', '<div class="page-wrapper" id="{opts.riotid}" style="display: none;"> <div class="row"> <div class="col-lg-12"> <h1 class="page-header">Statistics</h1> </div> </div> <div class="row"></div> </div>', '', '', function(opts) {
});
riot.tag2('userslist', '<div class="page-wrapper" id="{opts.riotid}" style="display: none;"> <div class="row"> <div class="col-lg-12"> <h1 class="page-header">Users list</h1> </div> </div> <div class="row" style="padding-top: 10px"> <div class="col-lg-12"> <div class="panel panel-default"> <div class="panel-heading"> Users list </div> <div class="panel-body"> <div class="table-responsive"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th>Name</th> <th>Surname</th> <th>Points</th> <th>Last check-in</th> </tr> </thead> <tbody> <tr each="{user in users}"> <td>{user.name}</td> <td>{user.surname}</td> <td>{user.points}</td> <td>{user.lastCheckIn}</td> </tr> </tbody> </table> </div> </div> </div> </div> </div> </div>', '', '', function(opts) {
        var tag = this;
        tag.users = [];
        tag.on('mount', onMount);

        function onMount(){
            console.log('aaa');
            $.get(
                    "https://randomuser.me/api/?inc=name&results=100",
                    function (data) {
                        console.log(data);
                        $.each(data.results, function (key, value) {
                            var user = {
                                name: value.name.first,
                                surname: value.name.last,
                                points: Math.floor((Math.random() * 100) + 1),
                                lastCheckIn: (Math.floor((Math.random() * 28) + 1)).toString() + '-' + (Math.floor((Math.random() * 12) + 1)).toString() + '-' + (Math.floor((Math.random() * 2) + 2015))
                            };
                            tag.users.push(user);
                        });
                        tag.update();
                    }
            )
        }

});
riot.tag2('promotions', '<div class="page-wrapper" id="{opts.riotid}" style="display: none;"> <div class="row"> <div class="col-lg-12"> <h1 class="page-header">Promotions management</h1> </div> </div> <div class="row"> <div class="col-lg-3"> <button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#addPromotionModal"> Add promotion </button> </div> </div> <div class="row" style="padding-top: 10px"> <div class="col-lg-12"> <div class="panel panel-default"> <div class="panel-heading"> Promotions </div> <div class="panel-body"> <div class="table-responsive"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th>#</th> <th>Name</th> <th>Nr of usage</th> <th>Points needed</th> <th>Starting date</th> <th>Stopping date</th> <th>Active</th> <th></th> </tr> </thead> <tbody> <tr each="{promotion, key in promotions}"> <td>{key+1}</td> <td>{promotion.name}</td> <td>{promotion.nrUsage}</td> <td>{promotion.pointsNeeded}</td> <td>{promotion.startingDate}</td> <td>{promotion.stoppingDate}</td> <td><input type="checkbox" checked="{promotion.active}" disabled></td> <td><a style="cursor: pointer;" onclick="{editPromotion.bind(this, key)}" data-promotionid="{key}"><i class="fa fa-pencil" aria-hidden="true"></i></a> <a style="cursor: pointer" onclick="{deletePromotion.bind(this, key)}"><i class="fa fa-trash" aria-hidden="true"></i></a></td> </tr> </tbody> </table> </div> </div> </div> </div> </div> <div class="modal fade" id="addPromotionModal" tabindex="-1" role="dialog" aria-labelledby="addPromotionModalLabel" aria-hidden="true" style="display: none;"> <div class="modal-dialog"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button> <h4 class="modal-title" id="addPromotionModalLabel">Modal title</h4> </div> <div class="modal-body"> <form role="form"> <input id="promotionId" name="promotionId" type="text" style="display: none" value=""> <div class="form-group"> <label>Promotion name</label> <input class="form-control" name="name" id="promotionName" placeholder="Promotion name"> </div> <div class="form-group"> <label>Points needed by the user to activate the promotion</label> <input class="form-control" name="points" id="promotionPoints" placeholder="Points needed"> </div> <div class="form-group"> <label>Starting date. (Leave it blank if you don\'t want automated promotions.)</label> <input class="form-control" name="startingDate" id="promotionStartingDate" placeholder="Starting date"> </div> <div class="form-group"> <label>Stopping date. (Leave it blank if you don\'t want automated promotions.)</label> <input class="form-control" name="stoppingDate" id="promotionStoppingDate" placeholder="Stopping date"> </div> <div class="form-group"> <div class="checkbox"> <label> <input type="checkbox" name="active" id="promotionActive" value="1" checked>Active </label> </div> </div> </form> </div> <div class="modal-footer"> <button type="button" class="btn btn-default" data-dismiss="modal">Close</button> <button type="button" class="btn btn-primary" onclick="{createPromotion}">Save changes</button> </div> </div> </div> </div> </div>', '', '', function(opts) {
        var tag = this;
        tag.on('mount', onMount) ;
        tag.createPromotion = createPromotion;
        tag.editPromotion = editPromotion;
        tag.deletePromotion = deletePromotion;
        tag.promotions = [
            {
                key: 1,
                name: 'Coffe',
                nrUsage: '12',
                pointsNeeded: '10',
                startingDate: '01-01-2017',
                stoppingDate: '01-02-2017',
                active: false

            },
            {
                key: 2,
                name: 'Coffe2',
                nrUsage: '12',
                pointsNeeded: '10',
                startingDate: '01-10-2016',
                stoppingDate: '31-12-2016',
                active: true

            }
        ];

        function createPromotion(){
            var promotionNameField = $('#promotionName');
            var promotionPointsField = $('#promotionPoints');

            promotionNameField.parent().removeClass('has-error');
            promotionPointsField.parent().removeClass('has-error');

            var promotionId = $('#promotionId').val();
            var promotionName = promotionNameField.val();
            var promotionPoints = promotionPointsField.val();

            if(promotionName===''){
                promotionNameField.parent().addClass('has-error');
            }else if(promotionPoints===''){
                promotionPointsField.parent().addClass('has-error');
            }else{
                var promotion ={
                    name: promotionName,
                    nrUsage: 0,
                    pointsNeeded: promotionPoints,
                    startingDate: $('#promotionStartingDate').val(),
                    stoppingDate: $('#promotionStoppingDate').val(),
                    active: $('#promotionActive').is(':checked')
                };
                console.log(promotion);
                $('#addPromotionModal').modal('hide');
                if(promotionId!==''){
                    promotion.nrUsage = tag.promotions[parseInt(promotionId)].nrUsage;
                    tag.promotions[parseInt(promotionId)] = promotion
                }else{
                    tag.promotions.push(promotion);
                }
                $('#promotionId').val('');
                tag.update();
            }

        }

        function editPromotion(id) {
            $('#promotionId').val(id);
            $('#promotionName').val(tag.promotions[id].name);
            $('#promotionPoints').val(tag.promotions[id].pointsNeeded);
            $('#promotionStartingDate').val(tag.promotions[id].startingDate);
            $('#promotionStoppingDate').val(tag.promotions[id].stoppingDate);
            $('#promotionActive').prop('checked', tag.promotions[id].active);
            $('#addPromotionModal').modal('show');
        }

        function onMount() {
            $('#addPromotionModal').on('hidden.bs.modal', function () {
                $(this)
                        .find("input,textarea,select")
                        .val('')
                        .end()
                        .find("input[type=checkbox], input[type=radio]")
                        .prop("checked", "")
                        .end();
            })
        }

        function deletePromotion(id) {
            var r = confirm('Are you sure?');
            if(r){
                tag.promotions.splice(id, 1);
                tag.update();
            }
        }

});