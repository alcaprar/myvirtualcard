<advertisement>
    <div class="page-wrapper" id="{opts.riotid}" style="display: none">
        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">Advertisement</h1>
            </div>
            <!-- /.col-lg-12 -->
        </div>
        <!-- /.row -->
        <div class="row">
            <div class="col-lg-3">
                <button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#addCampaignModal">
                    Create new campaign
                </button>
            </div>
        </div>
        <div class="row" style="padding-top: 10px">
            <div class="col-lg-12">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        Promotions
                    </div>
                    <!-- /.panel-heading -->
                    <div class="panel-body">
                        <div class="table-responsive">
                            <table class="table table-striped table-bordered table-hover">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>Nr. Views</th>
                                    <th>Investment</th>
                                    <th>Starting date</th>
                                    <th>Stopping date</th>
                                    <th>Active</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr each="{ campaign, key in campaigns}">
                                    <td>{key+1}</td>
                                    <td>{campaign.name}</td>
                                    <td>{campaign.type}</td>
                                    <td>{campaign.nrViews}</td>
                                    <td>{campaign.investment} €</td>
                                    <td>{campaign.startingDate}</td>
                                    <td>{campaign.stoppingDate}</td>
                                    <td><input type="checkbox" checked="{campaign.active}" disabled></td>
                                    <td><a style="cursor: pointer;" onclick="{editCampaign.bind(this, key)}" data-promotionid="{key}"><i class="fa fa-pencil" aria-hidden="true"></i></a>
                                        <a style="cursor: pointer" onclick="{deleteCampaign.bind(this, key)}"><i class="fa fa-trash" aria-hidden="true"></i></a></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- /.table-responsive -->
                    </div>
                    <!-- /.panel-body -->
                </div>
                <!-- /.panel -->
            </div>
        </div>
        <div class="modal fade" id="addCampaignModal" tabindex="-1" role="dialog" aria-labelledby="addCampaignModalLabel" aria-hidden="true" style="display: none;">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <h4 class="modal-title" id="addCampaignModalLabel">Create new adv campaign</h4>
                    </div>
                    <div class="modal-body">
                        <form role="form">
                            <input id="campaignId" name="campaignId" type="text" style="display: none" value="">
                            <div class="form-group">
                                <label>Campaign name</label>
                                <input class="form-control" name="name" id="campaignName" placeholder="Campaign name">
                            </div>
                            <div class="form-group">
                                <label>Type</label>
                                <select class="custom-select" name="type" id="campaignType">
                                    <option selected>Open this select menu</option>
                                    <option value="Top banner">Top banner</option>
                                    <option value="Push notifications">Push notifications</option>
                                    <option value="Email">Email</option>
                                    <option value="SMS">SMS</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Investment</label>
                                <input class="form-control" name="investment" id="campaignInvestment" placeholder="Investment amount">
                            </div>
                            <div class="form-group">
                                <label>Starting date. (Leave it blank if you don't want automated campaign.)</label>
                                <input class="form-control" name="startingDate" id="campaignStartingDate" placeholder="Starting date">
                            </div>
                            <div class="form-group">
                                <label>Stopping date. (Leave it blank if you don't want automated campaign.)</label>
                                <input class="form-control" name="stoppingDate" id="campaignStoppingDate" placeholder="Stopping date">
                            </div>
                            <div class="form-group">
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="active" id="campaignActive" value="1" checked>Active
                                    </label>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" onclick="{createCampaign}">Save changes</button>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
    </div>
    <!-- /#page-wrapper -->

    <script>
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

            //remove errors if are presents
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
</advertisement>