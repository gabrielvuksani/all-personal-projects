<template>
    <f7-page name="cards">
        <f7-navbar title="Cards">
            <f7-nav-right>
                <f7-link href="#" icon-only>
                    <f7-icon ios="f7:plus" md="material:add" data-bs-toggle="modal" data-bs-target="#addCardActionSheet">
                    </f7-icon>
                </f7-link>
            </f7-nav-right>
        </f7-navbar>
    
    
        <!-- Add Card Action Sheet -->
        <div class="modal fade action-sheet" id="addCardActionSheet" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Add a Card</h5>
                    </div>
                    <div class="modal-body mb-5">
                        <div class="action-sheet-content">
                            <form>
                                <div class="form-group basic">
                                    <div class="input-wrapper">
                                        <label class="label" for="cardnumber1">Card Number</label>
                                        <input type="number" id="cardnumber1" class="form-control" placeholder="Enter Card Number">
                                    </div>
                                </div>
    
                                <div class="row">
                                    <div class="col-6">
                                        <div class="form-group basic">
                                            <div class="input-wrapper">
                                                <label class="label">Expiry Date</label>
                                                <div class="row">
                                                    <div class="col-4">
                                                        <select class="form-control custom-select" id="exp-month">
                                                            <option value="01">01</option>
                                                            <option value="02">02</option>
                                                            <option value="03">03</option>
                                                            <option value="04">04</option>
                                                            <option value="05">05</option>
                                                            <option value="06">06</option>
                                                            <option value="07">07</option>
                                                            <option value="08">08</option>
                                                            <option value="09">09</option>
                                                            <option value="10">10</option>
                                                            <option value="11">11</option>
                                                            <option value="12">12</option>
                                                        </select>
                                                    </div>
                                                    <div class="col-6">
                                                        <select class="form-control custom-select" id="exp-year">
                                                            <option value="2020">2020</option>
                                                            <option value="2021">2021</option>
                                                            <option value="2022">2022</option>
                                                            <option value="2023">2023</option>
                                                            <option value="2024">2024</option>
                                                            <option value="2025">2025</option>
                                                            <option value="2026">2026</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-group basic">
                                            <div class="input-wrapper">
                                                <label class="label" for="cardcvv">
                                                    CVV
                                                    <a href="#" class="ms-05" data-bs-toggle="tooltip"
                                                        data-bs-placement="top" title="3-4 digit number back of your card">
                                                        What is this?
                                                    </a>
                                                </label>
                                                <input type="number" id="cardcvv" class="form-control" placeholder="Enter 3 digit">
                                            </div>
                                        </div>
                                    </div>
                                </div>
    
    
                                <div class="form-group basic mt-2">
                                    <button type="button" class="btn btn-primary btn-block btn-lg" data-bs-dismiss="modal">Add</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- * Add Card Action Sheet -->
    
    
        <f7-block-title large>My Cards</f7-block-title>
        <div class="section mt-2">
    
            <!-- card block -->
            <div class="card-block mb-2">
                <div class="card-main">
                    <div class="card-button dropdown">
                        <f7-link class="btn btn-link btn-icon" actions-open="#actions-one-group">
                            <f7-icon ios="f7:ellipsis" md="material:more_horiz"></f7-icon>
                        </f7-link>
                    </div>
                    <div class="balance">
                        <span class="label">BALANCE</span>
                        <h1 class="title">$1,256.90</h1>
                    </div>
                    <div class="in">
                        <div class="card-number">
                            <span class="label">Card Number</span> •••• 9905
                        </div>
                        <div class="bottom">
                            <div class="card-expiry">
                                <span class="label">Expiry</span> 12 / 25
                            </div>
                            <div class="card-ccv">
                                <span class="label">CCV</span> 553
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- * card block -->
    
            <!-- card block -->
            <div class="card-block bg-secondary mb-2">
                <div class="card-main">
                    <div class="card-button dropdown">
                        <f7-link class="btn btn-link btn-icon" actions-open="#actions-one-group">
                            <f7-icon ios="f7:ellipsis" md="material:more_horiz"></f7-icon>
                        </f7-link>
                    </div>
                    <div class="balance">
                        <span class="label">BALANCE</span>
                        <h1 class="title">$521.44</h1>
                    </div>
                    <div class="in">
                        <div class="card-number">
                            <span class="label">Card Number</span> •••• 9905
                        </div>
                        <div class="bottom">
                            <div class="card-expiry">
                                <span class="label">Expiry</span> 12 / 25
                            </div>
                            <div class="card-ccv">
                                <span class="label">CCV</span> 553
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- * card block -->
    
            <!-- card block -->
            <div class="card-block bg-success mb-2">
                <div class="card-main">
                    <div class="card-button dropdown">
                        <f7-link class="btn btn-link btn-icon" actions-open="#actions-one-group">
                            <f7-icon ios="f7:ellipsis" md="material:more_horiz"></f7-icon>
                        </f7-link>
                    </div>
                    <div class="balance">
                        <span class="label">BALANCE</span>
                        <h1 class="title">$52.60</h1>
                    </div>
                    <div class="in">
                        <div class="card-number">
                            <span class="label">Card Number</span> •••• 9905
                        </div>
                        <div class="bottom">
                            <div class="card-expiry">
                                <span class="label">Expiry</span> 12 / 25
                            </div>
                            <div class="card-ccv">
                                <span class="label">CCV</span> 553
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- * card block -->
    
            <!-- card block -->
            <div class="card-block bg-danger mb-2">
                <div class="card-main">
                    <div class="card-button dropdown">
                        <f7-link class="btn btn-link btn-icon" actions-open="#actions-one-group">
                            <f7-icon ios="f7:ellipsis" md="material:more_horiz"></f7-icon>
                        </f7-link>
                    </div>
                    <div class="balance">
                        <span class="label">BALANCE</span>
                        <h1 class="title">$1,256.90</h1>
                    </div>
                    <div class="in">
                        <div class="card-number">
                            <span class="label">Card Number</span> •••• 9905
                        </div>
                        <div class="bottom">
                            <div class="card-expiry">
                                <span class="label">Expiry</span> 12 / 25
                            </div>
                            <div class="card-ccv">
                                <span class="label">CCV</span> 553
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- * card block -->
    
            <!-- card block -->
            <div class="card-block bg-warning mb-2">
                <div class="card-main">
                    <div class="card-button dropdown">
                        <f7-link class="btn btn-link btn-icon" actions-open="#actions-one-group">
                            <f7-icon ios="f7:ellipsis" md="material:more_horiz"></f7-icon>
                        </f7-link>
                    </div>
                    <div class="balance">
                        <span class="label">BALANCE</span>
                        <h1 class="title">$1,256.90</h1>
                    </div>
                    <div class="in">
                        <div class="card-number">
                            <span class="label">Card Number</span> •••• 9905
                        </div>
                        <div class="bottom">
                            <div class="card-expiry">
                                <span class="label">Expiry</span> 12 / 25
                            </div>
                            <div class="card-ccv">
                                <span class="label">CCV</span> 553
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- * card block -->
    
            <!-- card block -->
            <div class="card-block bg-info mb-2">
                <div class="card-main">
                    <div class="card-button dropdown">
                        <f7-link class="btn btn-link btn-icon" actions-open="#actions-one-group">
                            <f7-icon ios="f7:ellipsis" md="material:more_horiz"></f7-icon>
                        </f7-link>
                    </div>
                    <div class="balance">
                        <span class="label">BALANCE</span>
                        <h1 class="title">$1,256.90</h1>
                    </div>
                    <div class="in">
                        <div class="card-number">
                            <span class="label">Card Number</span> •••• 9905
                        </div>
                        <div class="bottom">
                            <div class="card-expiry">
                                <span class="label">Expiry</span> 12 / 25
                            </div>
                            <div class="card-ccv">
                                <span class="label">CCV</span> 553
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- * card block -->
    
            <!-- card block -->
            <div class="card-block bg-dark mb-2">
                <div class="card-main">
                    <div class="card-button dropdown">
                        <f7-link class="btn btn-link btn-icon" actions-open="#actions-one-group">
                            <f7-icon ios="f7:ellipsis" md="material:more_horiz"></f7-icon>
                        </f7-link>
                    </div>
                    <div class="balance">
                        <span class="label">BALANCE</span>
                        <h1 class="title">$1,256.90</h1>
                    </div>
                    <div class="in">
                        <div class="card-number">
                            <span class="label">Card Number</span> •••• 9905
                        </div>
                        <div class="bottom">
                            <div class="card-expiry">
                                <span class="label">Expiry</span> 12 / 25
                            </div>
                            <div class="card-ccv">
                                <span class="label">CCV</span> 553
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- * card block -->
    
        </div>
    
        <!-- One Group -->
        <f7-actions id="actions-one-group">
            <f7-actions-group>
                <f7-actions-label>Card Name Here</f7-actions-label>
                <f7-actions-button style="color: var(--bs-primary-text-emphasis) !important"> Edit Card Details </f7-actions-button>
                <f7-actions-button color="red"> Cancel </f7-actions-button>
            </f7-actions-group>
        </f7-actions>
    </f7-page>
</template>

<script>
export default {

}
</script>

<style>

</style>