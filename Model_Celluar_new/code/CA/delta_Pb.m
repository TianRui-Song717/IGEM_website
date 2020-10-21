function map_Pb_new = delta_Pb(map_Pb_alt,map_now_alt)
rol_soil = 1500; % Soil density(kg/m^3) (1.5g/cm^3)
depth = 0.10; % The depth of the treated soil(m)
Length = 5; % The depth of the treated soil(m)
m_soil = Length*Length*depth* rol_soil;

map_Pb_new = zeros(102);
m_Pb_ew = 6*(1.2*1e-3)*(map_Pb_alt/m_soil); % The amount of Pb a earthworm can purify in a day (mg)
% m_Pb_ew = (2*1.2*1e-3)*(map_Pb_alt/m_soil); % The amount of Pb a earthworm can purify in a day (mg)

for i = 1:102
    for j = 1:102
        map_Pb_new(i,j) = map_Pb_alt(i,j) - m_Pb_ew(i,j) * map_now_alt(i,j);        
        if map_Pb_new(i,j)<0
            map_Pb_new(i,j)=0;
        end
    end
end