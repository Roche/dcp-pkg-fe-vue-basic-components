import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import DcpCard from '../Card.vue';

describe('Card.vue', () => {
  it('should render body content', () => {
    const wrapper = mount(DcpCard, {
      slots: {
        default: '<p>Card content</p>'
      }
    });

    expect(wrapper.find('.dcp-card-body').html()).toContain('Card content');
  });

  it('should render header and footer when slots are provided', () => {
    const wrapper = mount(DcpCard, {
      slots: {
        header: '<h1>Header</h1>',
        default: '<p>Body</p>',
        footer: '<p>Footer</p>'
      }
    });

    expect(wrapper.find('.dcp-card-header').exists()).toBe(true);
    expect(wrapper.find('.dcp-card-footer').exists()).toBe(true);
    expect(wrapper.find('.dcp-card-header').html()).toContain('Header');
    expect(wrapper.find('.dcp-card-footer').html()).toContain('Footer');
  });
});