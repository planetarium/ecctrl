import * as THREE from 'three';
import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

export const useGame = /* @__PURE__ */ create(
  /* @__PURE__ */ subscribeWithSelector<State>((set, get) => {
    return {
      /**
       * Enable input
       */
      enableInput: true,

      /**
       * Point to move point
       */
      moveToPoint: null as THREE.Vector3,

      /**
       * Point to move state
       */
      isPointMoving: false,

      /**
       * Next position
       */
      nextPosition: null as THREE.Vector3,

      /**
       * Next rotation
       */
      nextRotation: null as THREE.Quaternion,

      /**
       * Next velocity
       */
      nextVelocity: null as THREE.Vector3,

      /**
       * Character animations state manegement
       */
      // Initial animation
      curAnimation: null as string,
      animationSet: {} as AnimationSet,

      initializeAnimationSet: (animationSet: AnimationSet) => {
        set((state) => {
          if (Object.keys(state.animationSet).length === 0) {
            return { animationSet };
          }
          return {};
        });
      },

      reset: () => {
        set((state) => {
          return { curAnimation: state.animationSet.idle };
        });
      },

      idle: () => {
        set((state) => {
          if (state.curAnimation === state.animationSet.jumpIdle) {
            return { curAnimation: state.animationSet.jumpLand };
          } else if (
            state.curAnimation !== state.animationSet.action1 &&
            state.curAnimation !== state.animationSet.action2 &&
            state.curAnimation !== state.animationSet.action3 &&
            state.curAnimation !== state.animationSet.action4
          ) {
            return { curAnimation: state.animationSet.idle };
          }
          return {};
        });
      },

      walk: () => {
        set((state) => {
          if (state.curAnimation !== state.animationSet.action4) {
            return { curAnimation: state.animationSet.walk };
          }
          return {};
        });
      },

      run: () => {
        set((state) => {
          if (state.curAnimation !== state.animationSet.action4) {
            return { curAnimation: state.animationSet.run };
          }
          return {};
        });
      },

      jump: () => {
        set((state) => {
          return { curAnimation: state.animationSet.jump };
        });
      },

      jumpIdle: () => {
        set((state) => {
          if (state.curAnimation === state.animationSet.jump) {
            return { curAnimation: state.animationSet.jumpIdle };
          }
          return {};
        });
      },

      jumpLand: () => {
        set((state) => {
          if (state.curAnimation === state.animationSet.jumpIdle) {
            return { curAnimation: state.animationSet.jumpLand };
          }
          return {};
        });
      },

      fall: () => {
        set((state) => {
          return { curAnimation: state.animationSet.fall };
        });
      },

      action1: () => {
        set((state) => {
          if (state.curAnimation === state.animationSet.idle) {
            return { curAnimation: state.animationSet.action1 };
          }
          return {};
        });
      },

      action2: () => {
        set((state) => {
          if (state.curAnimation === state.animationSet.idle) {
            return { curAnimation: state.animationSet.action2 };
          }
          return {};
        });
      },

      action3: () => {
        set((state) => {
          if (state.curAnimation === state.animationSet.idle) {
            return { curAnimation: state.animationSet.action3 };
          }
          return {};
        });
      },

      action4: () => {
        set((state) => {
          if (
            state.curAnimation === state.animationSet.idle ||
            state.curAnimation === state.animationSet.walk ||
            state.curAnimation === state.animationSet.run
          ) {
            return { curAnimation: state.animationSet.action4 };
          }
          return {};
        });
      },

      /**
       * Additional animations
       */
      // triggerFunction: ()=>{
      //    set((state) => {
      //        return { curAnimation: state.animationSet.additionalAnimation };
      //    });
      // }

      /**
       * Set/get enable input
       */
      setEnableInput: (enable: boolean) => {
        set({ enableInput: enable });
      },
      getEnableInput: () => {
        return get().enableInput;
      },

      /**
       * Set/get point to move point
       */
      setMoveToPoint: (point: THREE.Vector3) => {
        set(() => {
          return { moveToPoint: point };
        });
      },

      getMoveToPoint: () => {
        return {
          moveToPoint: get().moveToPoint,
        };
      },

      /**
       * Set/get point moving state
       */
      setIsPointMoving: (isMoving: boolean) => {
        set(() => {
          return { isPointMoving: isMoving };
        });
      },

      getIsPointMoving: () => {
        return {
          isPointMoving: get().isPointMoving,
        };
      },

      /**
       * Set/get next position
       */
      setPosition: (position: THREE.Vector3) => {
        set(() => {
          return { nextPosition: position };
        });
      },

      getPosition: () => {
        return {
          position: get().nextPosition,
        };
      },

      /**
       * Set/get next rotation
       */
      setRotation: (rotation: THREE.Quaternion) => {
        set(() => {
          return { nextRotation: rotation };
        });
      },

      getRotation: () => {
        return {
          rotation: get().nextRotation,
        };
      },

      /**
       * Set/get next velocity
       */
      setVelocity: (velocity: THREE.Vector3) => {
        set(() => {
          return { nextVelocity: velocity };
        });
      },

      getVelocity: () => {
        return {
          velocity: get().nextVelocity,
        };
      },
    };
  }),
);

export type AnimationSet = {
  idle?: string;
  walk?: string;
  run?: string;
  jump?: string;
  jumpIdle?: string;
  jumpLand?: string;
  fall?: string;
  // Currently support four additional animations
  action1?: string;
  action2?: string;
  action3?: string;
  action4?: string;
};

type State = {
  enableInput: boolean;
  nextPosition: THREE.Vector3;
  nextRotation: THREE.Quaternion;
  nextVelocity: THREE.Vector3;
  moveToPoint: THREE.Vector3;
  isPointMoving: boolean;
  curAnimation: string;
  animationSet: AnimationSet;
  initializeAnimationSet: (animationSet: AnimationSet) => void;
  reset: () => void;
  setMoveToPoint: (point: THREE.Vector3 | null) => void;
  getMoveToPoint: () => { moveToPoint: THREE.Vector3 };
  setIsPointMoving: (isMoving: boolean) => void;
  getIsPointMoving: () => { isPointMoving: boolean };
  setEnableInput: (enable: boolean) => void;
  getEnableInput: () => boolean;
  setPosition: (position: THREE.Vector3 | null) => void;
  getPosition: () => { position: THREE.Vector3 };
  setRotation: (rotation: THREE.Quaternion | null) => void;
  getRotation: () => { rotation: THREE.Quaternion };
  setVelocity: (velocity: THREE.Vector3 | null) => void;
  getVelocity: () => { velocity: THREE.Vector3 };
} & {
  [key in keyof AnimationSet]: () => void;
};
