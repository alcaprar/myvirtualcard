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