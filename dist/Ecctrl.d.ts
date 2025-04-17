import { RapierRigidBody, type RigidBodyProps } from '@react-three/rapier';
import { type ReactNode } from 'react';
import * as THREE from 'three';
import React from 'react';
export { EcctrlAnimation } from './EcctrlAnimation';
export { useFollowCam } from './hooks/useFollowCam';
export { useGame } from './stores/useGame';
export { EcctrlJoystick } from '../src/EcctrlJoystick';
export { useJoystickControls } from './stores/useJoystickControls';
export interface DesiredMovement {
    /**
     * The final desired movement direction (or velocity/rotation)
     * - Example: new THREE.Vector3(0, 0, 1) => move forward
     * - Can include y-value (ex. vertical movement, etc.)
     */
    desiredMoveDir?: THREE.Vector3;
    /**
     * Whether to jump or not
     */
    desiredJump?: boolean;
    /**
     * Whether to run (sprint) or not
     */
    desiredRun?: boolean;
}
declare const _default: React.ForwardRefExoticComponent<Omit<EcctrlProps, "ref"> & React.RefAttributes<CustomEcctrlRigidBody>>;
export default _default;
export type camListenerTargetType = 'document' | 'domElement';
export interface CustomEcctrlRigidBody extends RapierRigidBody {
    rotateCamera?: (x: number, y: number) => void;
    rotateCharacterOnY?: (rad: number) => void;
}
export interface EcctrlProps extends RigidBodyProps {
    children?: ReactNode;
    debug?: boolean;
    capsuleHalfHeight?: number;
    capsuleRadius?: number;
    floatHeight?: number;
    characterInitDir?: number;
    followLight?: boolean;
    disableControl?: boolean;
    disableFollowCam?: boolean;
    disableFollowCamPos?: {
        x: number;
        y: number;
        z: number;
    };
    disableFollowCamTarget?: {
        x: number;
        y: number;
        z: number;
    };
    camInitDis?: number;
    camMaxDis?: number;
    camMinDis?: number;
    camUpLimit?: number;
    camLowLimit?: number;
    camInitDir?: {
        x: number;
        y: number;
    };
    camTargetPos?: {
        x: number;
        y: number;
        z: number;
    };
    camMoveSpeed?: number;
    camZoomSpeed?: number;
    camCollision?: boolean;
    camCollisionOffset?: number;
    camCollisionSpeedMult?: number;
    fixedCamRotMult?: number;
    camListenerTarget?: camListenerTargetType;
    followLightPos?: {
        x: number;
        y: number;
        z: number;
    };
    maxVelLimit?: number;
    turnVelMultiplier?: number;
    turnSpeed?: number;
    sprintMult?: number;
    jumpVel?: number;
    jumpForceToGroundMult?: number;
    slopJumpMult?: number;
    sprintJumpMult?: number;
    airDragMultiplier?: number;
    dragDampingC?: number;
    accDeltaTime?: number;
    rejectVelMult?: number;
    moveImpulsePointY?: number;
    camFollowMult?: number;
    camLerpMult?: number;
    fallingGravityScale?: number;
    fallingMaxVel?: number;
    wakeUpDelay?: number;
    rayOriginOffest?: {
        x: number;
        y: number;
        z: number;
    };
    rayHitForgiveness?: number;
    rayLength?: number;
    rayDir?: {
        x: number;
        y: number;
        z: number;
    };
    floatingDis?: number;
    springK?: number;
    dampingC?: number;
    showSlopeRayOrigin?: boolean;
    slopeMaxAngle?: number;
    slopeRayOriginOffest?: number;
    slopeRayLength?: number;
    slopeRayDir?: {
        x: number;
        y: number;
        z: number;
    };
    slopeUpExtraForce?: number;
    slopeDownExtraForce?: number;
    showHeadRayOrigin?: boolean;
    headRayOriginOffest?: number;
    headRayLength?: number;
    headRayDir?: {
        x: number;
        y: number;
        z: number;
    };
    autoBalance?: boolean;
    autoBalanceSpringK?: number;
    autoBalanceDampingC?: number;
    autoBalanceSpringOnY?: number;
    autoBalanceDampingOnY?: number;
    animated?: boolean;
    mode?: string;
    controllerKeys?: {
        forward?: number;
        backward?: number;
        leftward?: number;
        rightward?: number;
        jump?: number;
        action1?: number;
        action2?: number;
        action3?: number;
        action4?: number;
    };
    bodySensorSize?: Array<number>;
    bodySensorPosition?: {
        x: number;
        y: number;
        z: number;
    };
    /**
     * Callback that provides the final movement result (direction, jump, etc.) from external source
     */
    movementOverride?: () => DesiredMovement;
    props?: RigidBodyProps;
}
export interface userDataType {
    canJump?: boolean;
    slopeAngle?: number | null;
    characterRotated?: boolean;
    isOnMovingObject?: boolean;
    excludeEcctrlRay?: boolean;
}
