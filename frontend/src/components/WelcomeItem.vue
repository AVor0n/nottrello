<template>
  <div class="item">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.item {
  position: relative;
  display: flex;
  margin-block-start: 2rem;
}

.details {
  flex: 1;
  margin-inline-start: 1rem;
}

i {
  display: flex;
  place-content: center;
  place-items: center;
  inline-size: 32px;
  block-size: 32px;
  color: var(--color-text);
}

h3 {
  margin-block-end: 0.4rem;
  color: var(--color-heading);
  font-weight: 500;
  font-size: 1.2rem;
}

@media (min-width: 1024px) {
  .item {
    margin-block-start: 0;
    padding-block: 0.4rem 1rem;
    padding-inline: calc(var(--section-gap) / 2) 0;
  }

  i {
    position: absolute;
    inset-block-start: calc(50% - 25px);
    inset-inline-start: -26px;
    inline-size: 50px;
    block-size: 50px;
    border: 1px solid var(--color-border);
    border-radius: 8px;
    background: var(--color-background);
  }

  .item:before {
    position: absolute;
    inset-block-end: calc(50% + 25px);
    inset-inline-start: 0;
    content: ' ';
    block-size: calc(50% - 25px);
    border-inline-start: 1px solid var(--color-border);
  }

  .item:after {
    position: absolute;
    inset-block-start: calc(50% + 25px);
    inset-inline-start: 0;
    content: ' ';
    block-size: calc(50% - 25px);
    border-inline-start: 1px solid var(--color-border);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
