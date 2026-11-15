// COMPONENTS
import DcpModal from './components/Modal.vue';
import DcpChip from './components/Chip.vue';
import DcpCard from './components/Card.vue';
import DcpGxpStatus from './components/GxpStatus.vue';
import DcpLoader from './components/Loader.vue';

// PAGES
import DcpPageTitle from './components/pages/PageTitle.vue';
import DcpBasicPage from './components/pages/BasicPage.vue';
import DcpEditorPage from './components/pages/EditorPage.vue';
import DcpPageCreateMenu from './components/pages/DcpPageCreateMenu.vue';
import DcpPageSwitcher from './components/pages/DcpPageSwitcher.vue';

import DcpSideBar from './components/pages/components/sidebar/SideBar.vue';

// BUTTONS
import DcpButton from './components/Button.vue';
import DcpDefaultButton from './components/buttons/DcpDefaultButton.vue';
import DcpFlatButton from './components/buttons/DcpFlatButton.vue';
import DcpIconButton from './components/buttons/DcpIconButton.vue';
import DcpTextButton from './components/buttons/DcpTextButton.vue';

const dcpComponents = {
  DcpButton,
  DcpModal,
  DcpLoader,

  DcpChip,
  DcpCard,
  DcpGxpStatus,
  DcpBasicPage,
  DcpEditorPage,
  DcpPageTitle,
 
  DcpPageCreateMenu,
  DcpDefaultButton,
  DcpFlatButton,
  DcpIconButton,
  DcpTextButton,
  DcpPageSwitcher,

  DcpSideBar,

};

export default {
  install(app: any) {
    for (const [name, component] of Object.entries(dcpComponents)) {
      app.component(name, component);
    }
  },
};

// Export components individually as well
export {
  DcpButton,
  DcpModal,
  DcpLoader,

  DcpChip,
  DcpCard,
  DcpGxpStatus,
  DcpBasicPage,
  DcpPageTitle,

  DcpPageCreateMenu,
  DcpDefaultButton,
  DcpFlatButton,
  DcpIconButton,
  DcpTextButton,
  DcpPageSwitcher,
  DcpEditorPage,

  DcpSideBar,
};
