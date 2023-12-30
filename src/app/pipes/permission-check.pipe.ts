import { Pipe, PipeTransform } from '@angular/core';
import { Role } from '../model';

@Pipe({
  name: 'permissionCheck'
})
export class PermissionCheckPipe implements PipeTransform {

  transform(permissions: Role[], roleName: string): string {
    const hasPermission = permissions.some(permission => permission.role === roleName);
    return hasPermission ? '✓' : '✗';
  }

}
