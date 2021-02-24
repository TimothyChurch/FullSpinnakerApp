<template>
  <div id="app">
    <paypal-checkout
      amount="10.00"
      currency="USD"
      :client="paypal"
    />
  </div>
</template>
