<template>
  <f7-page name="portfolio">
    <f7-navbar title="My Portfolio">
      <f7-nav-right>
        <f7-link href="#" icon-only>
          <f7-icon ios="f7:plus" md="material:add"></f7-icon>
        </f7-link>
      </f7-nav-right>
    </f7-navbar>

    <div v-for="section in sections" :key="section.title" class="section mt-2">
      <f7-block-title class="section-title">{{ section.title }}</f7-block-title>
      <f7-block strong inset>
        <ul class="listview flush transparent no-line image-listview detailed-list mt-1 mb-1">
          <li v-for="coin in section.coins" :key="coin.name">
            <f7-link :href="coin.link" style="color: var(--bs-primary-text) !important;" class="item">
              <div :class="coin.changeDirection === 'up' ? 'icon-box text-success' : 'icon-box text-danger'">
                <f7-icon :ios="coin.icon" :md="coin.icon"></f7-icon>
              </div>
              <div class="in">
                <div>
                  <strong>{{ coin.name }}</strong>
                  <div class="text-small text-secondary">{{ coin.amount }}</div>
                </div>
                <div class="text-end">
                  <strong>{{ coin.price }}</strong>
                  <div class="text-small">
                    <span :class="coin.changeDirection === 'up' ? 'badge badge-success' : 'badge badge-danger'">
                      <f7-icon size="12" :ios="coin.iconDirection" :md="coin.iconDirection"></f7-icon>
                      {{ coin.change }}
                    </span>
                  </div>
                </div>
              </div>
            </f7-link>
          </li>
        </ul>
      </f7-block>
    </div>
  </f7-page>
</template>

<script>
export default {
  data() {
    return {
      sections: [
        {
          title: 'Top Coins',
          coins: [
            {
              name: 'Bitcoin',
              icon: 'material:trending_up',
              amount: '0.053201 BTC',
              price: '$5,503.30',
              change: '2.59%',
              changeDirection: 'up',
              iconDirection: 'f7:arrow_up',
              link: '/coins/',
            },
            {
              name: 'Ethereum',
              icon: 'material:trending_up',
              amount: '45.5469 ETH',
              price: '$1,246.47',
              change: '2.59%',
              changeDirection: 'up',
              iconDirection: 'f7:arrow_up'
            },
            {
              name: 'Cardano',
              icon: 'material:trending_down',
              amount: '251.48 ADA',
              price: '$316.50',
              change: '2.59%',
              changeDirection: 'down',
              iconDirection: 'f7:arrow_down'
            },
            {
              name: 'Tether',
              icon: 'material:trending_up',
              amount: '45.5469 USDT',
              price: '$45.54',
              change: '2.59%',
              changeDirection: 'up',
              iconDirection: 'f7:arrow_up'
            }
          ]
        },
        {
          title: 'Most Active',
          coins: [
            {
              name: 'Bitcoin',
              icon: 'material:trending_up',
              amount: '0.053201 BTC',
              price: '$5,503.30',
              change: '2.59%',
              changeDirection: 'up',
              iconDirection: 'f7:arrow_up'
            },
            {
              name: 'Ethereum',
              icon: 'material:trending_up',
              amount: '45.5469 ETH',
              price: '$1,246.47',
              change: '2.59%',
              changeDirection: 'up',
              iconDirection: 'f7:arrow_up'
            },
            {
              name: 'Litecoin',
              icon: 'material:trending_up',
              amount: '45.61 LTC',
              price: '$409.90',
              change: '62.59%',
              changeDirection: 'up',
              iconDirection: 'f7:arrow_up'
            },
            {
              name: 'USD Coin',
              icon: 'material:trending_up',
              amount: '45.5469 USDC',
              price: '$45.54',
              change: '2.59%',
              changeDirection: 'up',
              iconDirection: 'f7:arrow_up'
            }
          ]
        },
        {
          title: 'Others',
          coins: [
            {
              name: 'Dogecoin',
              icon: 'material:trending_up',
              amount: '34,525.50 DOGE',
              price: '$35,258.32',
              change: '5.49%',
              changeDirection: 'up',
              iconDirection: 'f7:arrow_up'
            },
            {
              name: 'TRON',
              icon: 'material:trending_down',
              amount: '452.23 TRX',
              price: '$512.37',
              change: '2.59%',
              changeDirection: 'down',
              iconDirection: 'f7:arrow_down'
            },
            {
              name: 'Cardano',
              icon: 'material:trending_down',
              amount: '251.48 ADA',
              price: '$316.50',
              change: '2.59%',
              changeDirection: 'down',
              iconDirection: 'f7:arrow_down'
            },
            {
              name: 'Tether',
              icon: 'material:trending_up',
              amount: '45.5469 USDT',
              price: '$45.54',
              change: '2.59%',
              changeDirection: 'up',
              iconDirection: 'f7:arrow_up'
            },
            {
              name: 'Bitcoin',
              icon: 'material:trending_up',
              amount: '0.053201 BTC',
              price: '$5,503.30',
              change: '2.59%',
              changeDirection: 'up',
              iconDirection: 'f7:arrow_up'
            },
            {
              name: 'Ethereum',
              icon: 'material:trending_up',
              amount: '45.5469 ETH',
              price: '$1,246.47',
              change: '2.59%',
              changeDirection: 'up',
              iconDirection: 'f7:arrow_up'
            }
          ]
        }
      ]
    };
  }
}

</script>

<style>

</style>