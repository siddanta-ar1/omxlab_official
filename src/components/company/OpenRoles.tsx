type Role = {
  role: string;
  department: string;
  facility: string;
  type: 'Full-time' | 'Research Fellowship' | 'Contract';
};

// 18 rows -- keep the count exactly matching the "Careers (6 open)" canon.
const ROLES: Role[] = [
  { role: 'Founding Engineer, Distributed Systems', department: 'Engineering', facility: 'Kathmandu Studio', type: 'Full-time' },
  { role: 'Research Engineer, Evaluation', department: 'Research', facility: 'Kathmandu Studio', type: 'Full-time' },
  { role: 'Applied Researcher, Multimodal', department: 'Research', facility: 'Remote', type: 'Full-time' },
  { role: 'Infrastructure Engineer', department: 'Engineering', facility: 'Kathmandu Studio', type: 'Full-time' },
  { role: 'Research Fellow, Verification', department: 'Research', facility: 'Remote', type: 'Research Fellowship' },
  { role: 'Design Engineer, Interface Systems', department: 'Design', facility: 'Kathmandu Studio', type: 'Contract' },
];

const COLUMNS: { label: string; key: keyof Role }[] = [
  { label: 'Role', key: 'role' },
  { label: 'Department', key: 'department' },
  { label: 'Facility', key: 'facility' },
  { label: 'Type', key: 'type' },
];

export function OpenRoles() {
  return (
    <section id="open-roles" className="w-full bg-studio-grey border-b border-grid-hairline">
      <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin py-space-3xl">
        <div className="mb-space-lg flex flex-col sm:flex-row sm:items-end justify-between gap-space-sm">
          <div>
            <span className="text-micro-eyebrow text-text-muted uppercase tracking-[0.25em] block mb-space-xs">
              05 / CAREERS
            </span>
            <h2 className="text-headline-md text-text-primary">Careers (6 open)</h2>
          </div>
          <p className="text-body-compact text-on-surface-variant max-w-sm">
            Open registry entries, current as of this publication. The laboratory
            hires slowly and in public.
          </p>
        </div>

        <div className="overflow-x-auto border border-grid-hairline bg-paper-white">
          <table className="w-full min-w-[760px] border-collapse text-left">
            <caption className="sr-only">Open roles at OMX Lab: role, department, facility and engagement type.</caption>
            <thead>
              <tr className="border-b border-grid-hairline bg-studio-grey">
                {COLUMNS.map((column) => (
                  <th
                    key={column.key}
                    scope="col"
                    className="p-space-sm text-label-code text-text-muted uppercase tracking-[0.15em] font-medium"
                  >
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-grid-hairline">
              {ROLES.map((role) => (
                <tr
                  key={`${role.role}-${role.facility}`}
                  className="hover:bg-studio-grey transition-colors duration-100"
                >
                  <td className="p-space-sm text-body-compact text-text-primary font-medium">
                    {role.role}
                  </td>
                  <td className="p-space-sm text-body-compact text-on-surface-variant">
                    {role.department}
                  </td>
                  <td className="p-space-sm text-body-compact text-on-surface-variant">
                    {role.facility}
                  </td>
                  <td className="p-space-sm text-body-compact text-on-surface-variant">
                    {role.type}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default OpenRoles;
