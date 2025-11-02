

// Type for serialized variant (without component function)
export interface SerializedComponentVariant {
  title: string;
  description: string;
  image: string;
  fallbackImage: string;
  code: string;
  manualCode: string; // Add manual installation code
}
export interface ComponentVariant {
  title: string;
  description: string;
  component?: React.ComponentType;
  image?: string;
  fallbackImage?: string;
  code: string;
  manualCode: string;
}

export interface InstallationConfig {
  cliCommand: string;
  dependencies: string[];
  componentPath: string;
  utilsCode: string;
}

export interface ComponentGroup {

  name: string;

  title: string;

  description: string;

  category: string;

  components: string[];

  installation: {

    cliCommand: string;

    dependencies: string[];

    componentPath: string;

    utilsCode: string;

  };

  examples?: Array<{

    title: string;

    description: string;

    component: React.ComponentType;

    code: string;

  }>;

  props?: Array<{

    name: string;

    type: string;

    description: string;

    default?: string;

    required?: boolean;

  }>;

  variants?: Record<string, {

    title: string;

    description: string;

    component: React.ComponentType;

    image: string;

    fallbackImage: string;

    code: string;

    manualCode?: string;

  }>;

}

// Type for serialized component group (without component functions)
export interface SerializedComponentGroup {
  title: string;
  description: string;
  category: string;
  variants: Record<string, SerializedComponentVariant>;
}





