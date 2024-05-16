<template>
  <f7-page name="profile">

    <!-- Top Navbar -->
    <f7-navbar>
      <f7-nav-title sliding>Profile</f7-nav-title>
      <f7-nav-right>
        <f7-link href="/settings/" icon-only>
          <f7-icon ios="f7:gear_alt_fill" md="material:settings">
          </f7-icon>
        </f7-link>
      </f7-nav-right>
    </f7-navbar>

    <!-- Avatar Section -->
    <div class="section mt-3 text-center">
      <div class="avatar-section">
        <f7-link href="#">
          <img src="../assets/img/sample/avatar/avatar1.jpg" alt="avatar" class="imaged w100 rounded">
          <span class="button">
            <f7-icon size="20" style="left: 0.5px;" ios="f7:camera" md="material:photo_camera"></f7-icon>
          </span>
        </f7-link>
      </div>
    </div>

    <!-- Theme Section -->
    <f7-block-title>Theme</f7-block-title>
    <f7-list dividers-ios strong inset>
      <f7-list-item link="/color-themes/" title="Theme" after="Default"></f7-list-item>
    </f7-list>

    <!-- Profile Settings Section -->
    <f7-block-title>Profile Settings</f7-block-title>
    <f7-list dividers-ios strong inset>
      <f7-list-item link="#" title="Change Username"></f7-list-item>
      <f7-list-item link="#" title="Update E-mail"></f7-list-item>
      <f7-list-item link="#" title="Address" after="Edit"></f7-list-item>
      <f7-list-item title="Private Profile">
        <f7-toggle></f7-toggle>
      </f7-list-item>
    </f7-list>

    <!-- Notifications Section -->
    <f7-block-title>Notifications</f7-block-title>
    <f7-list dividers-ios strong inset>
      <f7-list-item title="Payment Alert" footer="Send notification when new payment received">
        <f7-toggle></f7-toggle>
      </f7-list-item>
      <f7-list-item link="#" title="Notification Sound" after="Beep"></f7-list-item>
    </f7-list>

    <!-- Security Section -->
    <f7-block-title>Security</f7-block-title>
    <f7-list dividers-ios strong inset>
      <f7-list-item link="#" title="Update Password"></f7-list-item>
      <f7-list-item title="2 Step Verification">
        <f7-toggle checked></f7-toggle>
      </f7-list-item>
      <f7-list-item link="#" title="Log out all devices"></f7-list-item>
    </f7-list>

  </f7-page>
</template>

<script>
export default {

}
</script>

<style>
/* Add any styling here */
</style>
