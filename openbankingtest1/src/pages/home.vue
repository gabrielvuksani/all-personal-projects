<template>
    <f7-page name="home">
        <!-- Top Navbar -->
        <f7-navbar id="homenavbar" large :sliding="false">
            <f7-nav-left>
                <a href="#" class="" data-bs-toggle="modal" data-bs-target="#sidebarPanel">
                    <f7-link icon-ios="f7:menu" icon-md="material:menu" panel-open="left"></f7-link>
                </a>
            </f7-nav-left>
            <f7-nav-title sliding>oFinancial</f7-nav-title>
            <f7-nav-right>
                <f7-link href="/notifications/" icon-only>
                    <f7-icon ios="f7:bell" md="material:notifications">
                        <f7-badge color="red">4</f7-badge>
                    </f7-icon>
                </f7-link>
                <!-- <f7-link href="/profile/" icon-only>
                  <f7-icon ios="f7:person_circle_fill" md="material:person">
                    <f7-badge color="red">6</f7-badge>
                  </f7-icon>
                </f7-link> -->
            </f7-nav-right>
            <f7-nav-title-large>oFinancial</f7-nav-title-large>
        </f7-navbar>
    
        <!-- Page content-->
        <!-- Wallet -->
        <!-- Wallet Card -->
        <f7-block strong inset style="box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.09); background: var( --bs-light-bg-subtle);">
            <div class="wallet-card">
                <!-- Balance -->
                <div class="balance">
                    <div class="left">
                        <span class="title">Total Balance</span>
                        <h1 class="total">$2,562.50</h1>
                    </div>
                    <div class="right">
                        <a href="#" class="button" data-bs-toggle="modal" data-bs-target="#depositActionSheet">
                            <f7-icon ios="f7:plus" md="material:add" style="color: var(--bs-primary-text-emphasis);"></f7-icon>
                        </a>
                    </div>
                </div>
                <!-- * Balance -->
                <!-- Wallet Footer -->
                <div class="wallet-footer">
                    <div class="item">
                        <f7-link href="#" data-bs-toggle="modal" data-bs-target="#withdrawActionSheet">
                            <div class="icon-wrapper bg-danger">
                                <f7-icon ios="f7:arrow_down" md="material:arrow_downward"></f7-icon>
                            </div>
                            <strong style="color: var(--bs-primary-text-emphasis) !important;">Withdraw</strong>
                        </f7-link>
                    </div>
                    <div class="item">
                        <f7-link href="#" data-bs-toggle="modal" data-bs-target="#sendActionSheet">
                            <div class="icon-wrapper">
                                <f7-icon ios="f7:arrow_right" md="material:arrow_forward"></f7-icon>
                            </div>
                            <strong style="color: var(--bs-primary-text-emphasis) !important;">Send</strong>
                        </f7-link>
                    </div>
                    <div class="item">
                        <f7-link tab-link="#view-cards" tab url="/cards/">
                            <div class="icon-wrapper bg-success">
                                <f7-icon ios="f7:creditcard" md="material:credit_card"></f7-icon>
                            </div>
                            <strong style="color: var(--bs-primary-text-emphasis) !important;">Cards</strong>
                        </f7-link>
                    </div>
                    <div class="item">
                        <f7-link href="#" data-bs-toggle="modal" data-bs-target="#exchangeActionSheet">
                            <div class="icon-wrapper bg-warning">
                                <f7-icon ios="f7:arrow_up_arrow_down" md="material:swap_vert"></f7-icon>
                            </div>
                            <strong style="color: var(--bs-primary-text-emphasis) !important;">Exchange</strong>
                        </f7-link>
                    </div>
    
                </div>
                <!-- * Wallet Footer -->
            </div>
        </f7-block>
        <!-- Wallet Card -->
        <!-- * Wallet -->
    
        <!-- Stats -->
        <!-- Stats Section -->
        <f7-block class="section">
            <div class="grid grid-cols-2 grid-gap">
                <div class="stat-box">
                    <div class="title">Income</div>
                    <div class="value text-success">$552.95</div>
                </div>
                <div class="stat-box">
                    <div class="title">Expenses</div>
                    <div class="value text-danger">$86.45</div>
                </div>
            </div>
            <div class="grid grid-cols-2 grid-gap mt-2">
                <div class="stat-box">
                    <div class="title">Total Bills</div>
                    <div class="value">$53.25</div>
                </div>
                <div class="stat-box">
                    <div class="title">Savings</div>
                    <div class="value">$120.99</div>
                </div>
            </div>
        </f7-block>
        <!-- * Stats -->
        <f7-block>
            <p>This is an example of tabs-layout application. The main point of such tabbed layout is that each tab contains independent view with its own routing and navigation.</p>
    
            <p>Each tab/view may have different layout, different navbar type (dynamic, fixed or static) or without navbar like this tab.</p>
    
        </f7-block>
        <f7-block-title>Navigation</f7-block-title>
        <f7-list strong inset dividersIos>
            <f7-list-item link="/about/" title="About"></f7-list-item>
            <f7-list-item link="/form/" title="Form"></f7-list-item>
        </f7-list>
    
        <f7-block-title>Modals</f7-block-title>
        <f7-block class="grid grid-cols-2 grid-gap">
            <f7-button fill popup-open="#my-popup">Popup</f7-button>
            <f7-button fill login-screen-open="#my-login-screen">Login Screen</f7-button>
        </f7-block>
    
        <f7-block-title>Panels</f7-block-title>
        <f7-block class="grid grid-cols-2 grid-gap">
            <f7-button fill panel-open="left">Left Panel</f7-button>
            <f7-button fill panel-open="right">Right Panel</f7-button>
        </f7-block>
    
        <f7-list strong inset dividersIos>
            <f7-list-item title="Dynamic (Component) Route" link="/dynamic-route/blog/45/post/125/?foo=bar#about"></f7-list-item>
            <f7-list-item title="Default Route (404)" link="/load-something-that-doesnt-exist/"></f7-list-item>
            <f7-list-item title="Request Data & Load" link="/request-and-load/user/123456/"></f7-list-item>
        </f7-list>
    
    
    
        <!-- Deposit Action Sheet -->
        <div class="modal fade action-sheet" id="depositActionSheet" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Add Balance</h5>
                    </div>
                    <div class="modal-body mb-5">
                        <div class="action-sheet-content">
                            <form>
                                <div class="form-group basic">
                                    <div class="input-wrapper">
                                        <label class="label" for="account1">From</label>
                                        <select class="form-control custom-select" id="account1">
                                                <option value="0">Savings (*** 5019)</option>
                                                <option value="1">Investment (*** 6212)</option>
                                                <option value="2">Mortgage (*** 5021)</option>
                                            </select>
                                    </div>
                                </div>
    
                                <div class="form-group basic">
                                    <label class="label">Enter Amount</label>
                                    <div class="input-group mb-2">
                                        <span class="input-group-text" id="basic-addona1">$</span>
                                        <input type="text" class="form-control" placeholder="Enter an amount" value="100">
                                    </div>
                                </div>
    
    
                                <div class="form-group basic">
                                    <button type="button" class="btn btn-primary btn-block btn-lg" data-bs-dismiss="modal">Deposit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- * Deposit Action Sheet -->
    
        <!-- Withdraw Action Sheet -->
        <div class="modal fade action-sheet" id="withdrawActionSheet" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Withdraw Money</h5>
                    </div>
                    <div class="modal-body mb-5">
                        <div class="action-sheet-content">
                            <form>
                                <div class="form-group basic">
                                    <div class="input-wrapper">
                                        <label class="label" for="account2d">From</label>
                                        <sele class="form-control custom-select" id="account2d">
                                                <option value="0">Savings (*** 5019)</option>
                                                <option value="1">Investment (*** 6212)</option>
                                                <option value="2">Mortgage (*** 5021)</option>
                                            </sele                      <option value="1">Investment (*** 6212)</option>
                                                <option value="2">Mortgage (*** 5021)</option>
                                            </select>
                                    </div>
                                </div>
    
                                <div class="form-group basic">
                                    <div class="input-wrapper">
                                        <label class="label" for="text11d">To</label>
                                        <input type="email" class="form-control" id="text11d" placeholder="Enter IBAN">
                                        <i class="clear-input">
                                                <f7-icon ios="f7:xmark_circle" md="material:cancel"></f7-icon>
                                            </i>
                                    </div>
                                </div>ct>
                                    </div>
                                </div>
    
                                <div class="form-group basic">
                                    <div class="input-wrapper">
                                        <label class="label" for="text11d">To</label>
                                        <input type="email" class="form-control" id="text11d" placeholder="Enter IBAN">
                                        <i class="clear-input">
                                                <f7-icon ios="f7:xmark_circle" md="material:cancel"></f7-icon>
                                            </i>
                                    </div>
                                </div>
    
                                <div class="form-group basic">
                                    <label class="label">Enter Amount</label>
                                    <div class="input-group mb-2">
                                        <span class="input-group-text" id="basic-addonb1">$</span>
                                        <input type="text" class="form-control" placeholder="Enter an amount" value="100">
                                    </div>
                                </div>
    
                                <div class="form-group basic">
                                    <button type="button" class="btn btn-primary btn-block btn-lg" data-bs-dismiss="modal">Withdraw</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- * Withdraw Action Sheet -->
    
        <!-- Send Action Sheet -->
        <div class="modal fade action-sheet" id="sendActionSheet" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Send Money</h5>
                    </div>
                    <div class="modal-body mb-5">
                        <div class="action-sheet-content">
                            <form>
                                <div class="form-group basic">
                                    <div class="input-wrapper">
                                        <label class="label" for="account2">From</label>
                                        <select class="form-control custom-select" id="account2">
                                                <option value="0">Savings (*** 5019)</option>
                                                <option value="1">Investment (*** 6212)</option>
                                                <option value="2">Mortgage (*** 5021)</option>
                                            </select>
                                    </div>
                                </div>
    
                                <div class="form-group basic">
                                    <div class="input-wrapper">
                                        <label class="label" for="text11">To</label>
                                        <input type="email" class="form-control" id="text11" placeholder="Enter bank ID">
                                        <i class="clear-input">
                                            <f7-icon ios="f7:xmark_circle" md="material:cancel"></f7-icon>
                                            </i>
                                    </div>
                                </div>
    
                                <div class="form-group basic">
                                    <label class="label">Enter Amount</label>
                                    <div class="input-group mb-2">
                                        <span class="input-group-text" id="basic-addon1">$</span>
                                        <input type="text" class="form-control" placeholder="Enter an amount" value="100">
                                    </div>
                                </div>
    
                                <div class="form-group basic">
                                    <button type="button" class="btn btn-primary btn-block btn-lg" data-bs-dismiss="modal">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- * Send Action Sheet -->
    
        <!-- Exchange Action Sheet -->
        <div class="modal fade action-sheet" id="exchangeActionSheet" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Exchange Money</h5>
                    </div>
                    <div class="modal-body mb-5">
                        <div class="action-sheet-content">
                            <form>
                                <div class="row">
                                    <div class="col-6">
                                        <div class="form-group basic">
                                            <div class="input-wrapper">
                                                <label class="label" for="currency1">From</label>
                                                <select class="form-control custom-select" id="currency1">
                                                        <option value="1">EUR</option>
                                                        <option value="2">USD</option>
                                                        <option value="3">AUD</option>
                                                        <option value="4">CAD</option>
                                                    </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-group basic">
                                            <div class="input-wrapper">
                                                <label class="label" for="currency2">To</label>
                                                <select class="form-control custom-select" id="currency2">
                                                        <option value="1">USD</option>
                                                        <option value="1">EUR</option>
                                                        <option value="2">AUD</option>
                                                        <option value="3">CAD</option>
                                                    </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
    
                                <div class="form-group basic">
                                    <label class="label">Enter Amount</label>
                                    <div class="input-group mb-2">
                                        <span class="input-group-text" id="basic-addon2">$</span>
                                        <input type="text" class="form-control" placeholder="Enter an amount" value="100">
                                    </div>
                                </div>
    
    
    
                                <div class="form-group basic">
                                    <button type="button" class="btn btn-primary btn-block btn-lg" data-bs-dismiss="modal">Exchange</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- * Exchange Action Sheet -->
    </f7-page>
</template>

<style>

</style>