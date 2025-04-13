<script setup lang="ts">
import { computed } from 'vue';
import type { ButtonSize, ButtonView, PinType } from './BaseButton.types';
import styles from './BaseButton.module.css';

export interface BaseButtonProps {
  /** Размер кнопки, по умолчанию 'm' */
  size?: ButtonSize;
  /** Ширина кнопки
   * undefined - может выйти за пределы контейнера
   * 'auto' - если не умещается, то текст обрезается с ...
   * 'max' - растягивается на всю доступную ширину
   */
  width?: 'auto' | 'max';
  /** Вид кнопки, по умолчанию 'normal' */
  view?: ButtonView;
  /** Тип границ, по умолчанию 'round-round' */
  pin?: PinType;
  disabled?: boolean;
  loading?: boolean;
  selected?: boolean;
  /** Базовый тег для компонента, по умолчанию 'button' */
  component?: 'button' | 'router-link' | 'a';
  /** Если есть, при клике происходит переход по ссылке */
  href?: string;
  /** Аттрибут data-qa */
  qa?: string;
}

const props = withDefaults(defineProps<BaseButtonProps>(), {
  size: 'm',
  view: 'normal',
  disabled: false,
  loading: false,
  pin: 'round-round',
  component: 'button',
});

const classes = computed(() => {
  const [lPin, rPin] = props.pin.split('-');
  return {
    [styles.button]: true,
    [styles[props.size]]: true,
    [styles[props.view]]: true,
    [styles[`l_${lPin}`]]: true,
    [styles[`r_${rPin}`]]: true,
    [styles[`${props.width}`]]: props.width,
    [styles.selected]: props.selected,
    [styles.disabled]: props.disabled,
    [styles.loading]: props.loading,
  };
});
</script>

<template>
  <button :class="classes" v-bind="$attrs" :disabled="disabled || loading" :data-qa="qa">
    <slot></slot>
  </button>
</template>
