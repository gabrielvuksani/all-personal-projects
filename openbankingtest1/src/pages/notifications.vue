<template>
    <f7-page name="notifications">
         <!-- Top Navbar -->
    <f7-navbar>
      <f7-nav-left>
        <f7-nav-left back-link="Back"></f7-nav-left>
      </f7-nav-left>
      <f7-nav-title sliding>Notifications</f7-nav-title>
      <f7-nav-right>
        <f7-link>
            <f7-icon class="icon" @click="iconToggle = !iconToggle" :ios="iconToggle ? 'f7:bell' : 'f7:bell_slash'" :md="iconToggle ? 'f7:bell' : 'f7:bell_slash'"></f7-icon>
        </f7-link>
      </f7-nav-right>
    </f7-navbar>

    <!-- Page content-->
    <f7-list media-list dividers-ios strong outline>

      <f7-list-item
        link="#"
        title="Account Activity"
        header="New device detected"
        footer="Waterloo, ON - 09/14/2023, 3:50PM"
        badge="!"
        badge-color="red"
      >
        <template #media>
            <f7-link>
                <f7-icon ios="f7:exclamationmark_shield" md="material:privacy_tip" style="color: red;"></f7-icon>
            </f7-link>
        </template>
      </f7-list-item>

      <f7-list-item
        link="#"
        title="Payment Received"
        header="You have received a new transfer"
        footer="James Smith - 09/14/2023, 2:50PM"
      >
        <template #media>
            <f7-link>
                <f7-icon ios="f7:arrow_down_left" md="material:call_received" style="color: blue;"></f7-icon>
            </f7-link>
        </template>
      </f7-list-item>

      <f7-list-item
        link="#"
        title="Money Sent"
        header="The money transfer was successful"
        footer="John Doe - 09/14/2023, 2:50PM"
      >
        <template #media>
            <f7-link>
                <f7-icon ios="f7:arrow_up_right" md="material:arrow_circle_right" style="color: green;"></f7-icon>
            </f7-link>
        </template>
      </f7-list-item>

      <f7-list-item
        link="#"
        title="Account Activity"
        header="Your password recently changed"
        footer="Toronto, ON - 09/14/2023, 2:50PM"
        badge="!"
        badge-color="red"
      >
        <template #media>
            <f7-link>
                <f7-icon ios="f7:exclamationmark_shield" md="material:privacy_tip" style="color: red;"></f7-icon>
            </f7-link>
        </template>
      </f7-list-item>

      <f7-list-item
        link="#"
        title="System Information"
        header="You have new messages available"
        footer="09/14/2023, 2:50PM"
        badge="4"
        badge-color="red"
      >
        <template #media>
            <f7-link>
                <f7-icon ios="f7:quote_bubble" md="material:support_agent" style="color: orange;"></f7-icon>
            </f7-link>
        </template>
      </f7-list-item>

      <f7-list-item
        link="#"
        title="Payment Received"
        header="You have received a new transfer"
        footer="John Doe - 09/14/2023, 2:50PM"
      >
        <template #media>
            <f7-link>
                <f7-icon ios="f7:arrow_down_left" md="material:call_received" style="color: blue;"></f7-icon>
            </f7-link>
        </template>
      </f7-list-item>

      <f7-list-item
        link="#"
        title="Money Sent"
        header="The money transfer was successful"
        footer="Laura Gouldie - 09/14/2023, 2:50PM"
      >
        <template #media>
            <f7-link>
                <f7-icon ios="f7:arrow_up_right" md="material:arrow_circle_right" style="color: green;"></f7-icon>
            </f7-link>
        </template>
      </f7-list-item>

      <f7-list-item
        link="#"
        title="Payment Received"
        header="You have received a new transfer"
        footer="James Smith - 09/14/2023, 2:50PM"
      >
        <template #media>
            <f7-link>
                <f7-icon ios="f7:arrow_down_left" md="material:call_received" style="color: blue;"></f7-icon>
            </f7-link>
        </template>
      </f7-list-item>

    </f7-list>
    </f7-page>
  
</template>
<script>
export default {
  props: {
    f7router: Object,
  },
  data() {
    return {
      iconToggle: false
    }
  }
};
</script>
<style>
f7-list-item-title {
    color: #000 !important;
}
</style>