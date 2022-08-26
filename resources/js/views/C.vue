<template>
  <div class="chat-screen">
    <div class="new-card p-4">
      <div class="d-flex align-items-center justify-content-between">
        <vs-avatar primary>
          <i class="bx bxs-hot"></i>
        </vs-avatar>
        <h5 class="font-size-16 mb-0 text-truncate">ചാറ്റ് മുറി</h5>
        <div class="d-flex align-items-center">
          <div class="pr-2">user.name</div>
          <div class="dropdown">
            <vs-avatar badge badge-color="success">
              <i class="bx bx-user"></i>
            </vs-avatar>
            <transition name="fade">
              <div class="new-card p-3 dropdown-content">
                <div>user.name</div>
                <div>user.email</div>

                <vs-button>Logout</vs-button>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
    <div class="chat-scroll"><div class="chat-container">Hmmmm</div></div>
    <div class="chat-footer">
      <div class="new-card p-3 p-lg-4 mb-0">
        <form>
          <div class="d-flex align-items-center justify-content-between">
            <!-- <div class="pr-2 mw-100"> -->

            <input placeholder="Type your message" class="pr-2" />
            <!-- </div> -->
            <vs-button border>
              <i class="bx bxs-paper-plane"></i> Send
            </vs-button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style lang="sass">
.chat-screen
    position: absolute
    height: 100%
    width: 100%
    flex: 1
    overflow: hidden
    display: flex
    flex-flow: column
.chat-header
    position: absolute
    display: flex
    align-items: center
    width: 100%
    z-index: 10
    margin-right: 1px
    background: var(--chat-header-bg-color)
    border-top-right-radius: var(--chat-container-border-radius)
.chat-scroll
    background: var(--chat-content-bg-color)
    flex: 1
    display: flex
    overflow-y: auto
    margin-right: 1px
    margin-top: 60px
    -webkit-overflow-scrolling: touch
.chat-footer
    width: 100%
    border-bottom-right-radius: 4px
    z-index: 10
.chat-container
    padding: 0 5px 5px
</style>
