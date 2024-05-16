<template>
    <f7-page name="coins">
        <f7-navbar>
            <f7-nav-left>
                <f7-nav-left back-link="Back"></f7-nav-left>
            </f7-nav-left>
            <f7-nav-title sliding>Bitcoin (BTC)</f7-nav-title>
            <f7-nav-right>
                <f7-link href="#" icon-only>
                    <f7-icon ios="material:share" md="material:share" data-bs-toggle="modal" data-bs-target="#actionSheetShare">
                    </f7-icon>
                </f7-link>
            </f7-nav-right>
        </f7-navbar>
    
        <!-- Share Action Sheet -->
        <div class="modal fade action-sheet inset" id="actionSheetShare" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Share with</h5>
                    </div>
                    <div class="modal-body mb-5">
                        <ul class="action-button-list">
                            <li>
                                <a href="#" class="btn btn-list" data-bs-dismiss="modal">
                                    <span>
                                        <f7-icon ios="f7:logo_facebook" md="f7:logo_facebook"></f7-icon>
                                        Facebook
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="btn btn-list" data-bs-dismiss="modal">
                                    <span>
                                        <f7-icon ios="f7:logo_twitter" md="f7:logo_twitter"></f7-icon>
                                        Twitter
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="btn btn-list" data-bs-dismiss="modal">
                                    <span>
                                        <f7-icon ios="f7:logo_instagram" md="f7:logo_instagram"></f7-icon>
                                        Instagram
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="btn btn-list" data-bs-dismiss="modal">
                                    <span>
                                        <f7-icon ios="f7:logo_linkedin" md="f7:logo_linkedin"></f7-icon>
                                        Linkedin
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- * Share Action Sheet -->
    
    
    
        <!-- Coin Status -->
        <div class="section full gradientSection">
            <div class="in coin-head">
                <h1 class="total">$ 32,517.50</h1>
                <h4 class="caption">
                    <span class="iconbox text-success">
                        <f7-icon ios="f7:arrowtriangle_up_fill" md="f7:arrowtriangle_up_fill"></f7-icon>
                    </span> $2,325.19 <strong>(+1.50%)</strong>
                </h4>
            </div>
        </div>
        <!-- * Coin Status -->
    
    
        <!-- Buttons -->
        <div class="section">
            <f7-block dividers-ios outline inset style="background: var( --bs-light-bg-subtle);" class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                            <f7-link href="crypto-exchange.html" class="btn btn-block btn-lg btn-success" style="border: none !important">BUY</f7-link>
                        </div>
                        <div class="col">
                            <f7-link href="crypto-exchange.html" class="btn btn-block btn-lg btn-secondary" style="background: red !important; border: none !important;">SELL</f7-link>
                        </div>
                    </div>
                </div>
    
            </f7-block>
        </div>
        <!-- Buttons -->
    
        <!-- Stats -->
        <div class="section mt-2 mb-4">
            <f7-block dividers-ios outline inset style="background: var( --bs-light-bg-subtle);" class="">
                <ul class="listview no-line transparent flush simple-listview">
                    <li>
                        <div class="text-muted">Daily Change</div>
                        <strong class="text-success">+5.10%</strong>
                    </li>
                    <li>
                        <div class="text-muted">High Price</div>
                        <strong>$56,367.23</strong>
                    </li>
                    <li>
                        <div class="text-muted">Low Price</div>
                        <strong>$18,529.90</strong>
                    </li>
                    <li>
                        <div class="text-muted">Market Supply</div>
                        <strong>BTC 14.62M</strong>
                    </li>
                    <li>
                        <div class="text-muted">Market Cap</div>
                        <strong>$526.48B</strong>
                    </li>
                </ul>
            </f7-block>
            <div f7-block dividers-ios outline inset style="background: var( --bs-light-bg-subtle);" class="card mt-2">
                <div class="card-body">
                    <div class="row mb-05 fontsize-sub">
                        <div class="col text-success"><strong>72% Buy</strong></div>
                        <div class="col text-secondary text-end"><strong>26% Sell</strong></div>
                    </div>
                    <div class="progress">
                        <div class="progress-bar bg-success" role="progressbar" style="width: 72%" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                        <div class="progress-bar bg-secondary" role="progressbar" style="width: 28%" aria-valuenow="28" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Stats -->
    
        <!-- History -->
        <div class="section mt-4">
            <f7-block-title class="section-heading">
                <h2 class="title">History</h2>
                <a href="#" class="link" style="color: cadetblue">View All</a>
            </f7-block-title>
            <f7-block dividers-ios outline inset style="background: var( --bs-light-bg-subtle);">
                <ul class="listview flush transparent no-line image-listview detailed-list mt-1 mb-1">
                    <!-- item -->
                    <li>
                        <a href="#" class="item">
                            <div class="icon-box bg-success">
                                <f7-icon ios="f7:arrow_up" md="material:arrow_upward"></f7-icon>
                            </div>
                            <div class="in">
                                <div>
                                    <strong class="colorTextFix">Bitcoin</strong>
                                    <div class="text-small text-secondary">Sell Order #7893</div>
                                </div>
                                <div class="text-end">
                                    <strong class="colorTextFix">$855,24</strong>
                                    <div class="text-small">
                                        Today 11:38 AM
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <!-- * item -->
                    <!-- item -->
                    <li>
                        <f7-link href="#" class="item">
                            <div class="icon-box bg-danger">
                                <f7-icon ios="f7:arrow_down" md="material:arrow_downward"></f7-icon>
                            </div>
                            <div class="in">
                                <div>
                                    <strong class="colorTextFix">Bitcoin</strong>
                                    <div class="text-small text-secondary">Buy order #5501</div>
                                </div>
                                <div class="text-end">
                                    <strong class="colorTextFix">$550,26</strong>
                                    <div class="text-small">
                                        March 23, 2021
                                    </div>
                                </div>
                            </div>
                        </f7-link>
                    </li>
                    <!-- * item -->
                    <!-- item -->
                    <li>
                        <a href="#" class="item">
                            <div class="icon-box bg-danger">
                                <f7-icon ios="f7:arrow_down" md="material:arrow_downward"></f7-icon>
                            </div>
                            <div class="in">
                                <div>
                                    <strong class="colorTextFix">Bitcoin</strong>
                                    <div class="text-small text-secondary">Buy order #5432</div>
                                </div>
                                <div class="text-end">
                                    <strong class="colorTextFix">$1.509,24</strong>
                                    <div class="text-small">
                                        March 22, 2021
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <!-- * item -->
                    <!-- item -->
                    <li>
                        <a href="#" class="item">
                            <div class="icon-box bg-success">
                                <f7-icon ios="f7:arrow_up" md="material:arrow_upward"></f7-icon>
                            </div>
                            <div class="in">
                                <div>
                                    <strong class="colorTextFix">Bitcoin</strong>
                                    <div class="text-small text-secondary">Sell order #5245</div>
                                </div>
                                <div class="text-end">
                                    <strong class="colorTextFix">$52,68</strong>
                                    <div class="text-small">
                                        March 5, 2021
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <!-- * item -->
                    <!-- item -->
                    <li>
                        <a href="#" class="item">
                            <div class="icon-box bg-danger">
                                <f7-icon ios="f7:arrow_down" md="material:arrow_downward"></f7-icon>
                            </div>
                            <div class="in">
                                <div>
                                    <strong class="colorTextFix">Bitcoin</strong>
                                    <div class="text-small text-secondary">Buy order #4954</div>
                                </div>
                                <div class="text-end">
                                    <strong class="colorTextFix">$1.509,24</strong>
                                    <div class="text-small">
                                        March 3, 2021
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <!-- * item -->
                    <!-- item -->
                    <li>
                        <a href="#" class="item">
                            <div class="icon-box bg-success">
                                <f7-icon ios="f7:arrow_up" md="material:arrow_upward"></f7-icon>
                            </div>
                            <div class="in">
                                <div>
                                    <strong class="colorTextFix">Bitcoin</strong>
                                    <div class="text-small text-secondary">Sell order #4923</div>
                                </div>
                                <div class="text-end">
                                    <strong class="colorTextFix">$52,68</strong>
                                    <div class="text-small">
                                        March 2, 2021
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <!-- * item -->
                </ul>
            </f7-block>
        </div>
        <!-- History -->
    
    
    
    
        <div class="section inset mb-4 mt-4">
            <div class="accordion" id="accordionExample1">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion01">
                            What is Bitcoin?
                        </button>
                    </h2>
                    <div id="accordion01" class="accordion-collapse collapse" data-bs-parent="#accordionExample1">
                        <div class="accordion-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at feugiat tellus. Sed quis velit tellus.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion02">
                            How Bitcoin works?
                        </button>
                    </h2>
                    <div id="accordion02" class="accordion-collapse collapse" data-bs-parent="#accordionExample1">
                        <div class="accordion-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at feugiat tellus. Sed quis velit tellus.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion03">
                            How can i buy/sell Bitcoin?
                        </button>
                    </h2>
                    <div id="accordion03" class="accordion-collapse collapse" data-bs-parent="#accordionExample1">
                        <div class="accordion-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at feugiat tellus. Sed quis velit tellus.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    
    </f7-page>
</template>

<script>

</script>

<style>

</style>