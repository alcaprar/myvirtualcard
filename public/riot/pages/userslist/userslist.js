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
                                points: Math.floor((Math.random() * 10) + 1),
                                lastCheckIn: (Math.floor((Math.random() * 28) + 1)).toString() + '-' + (Math.floor((Math.random() * 12) + 1)).toString() + '-' + (Math.floor((Math.random() * 2) + 2015))
                            };
                            tag.users.push(user);
                        });
                        tag.update();
                    }
            )
        }

});